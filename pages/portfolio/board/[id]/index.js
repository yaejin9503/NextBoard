import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery, gql } from "@apollo/client"; 

import Image from 'next/image';

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
      fetchBoard(number:$number){
        number, 
        writer,
        title,
        contents,
        createdAt
      }
    }`

import {
  Wrapper, BoardContentsContainer, BoardTopUserInfo, BoardBottomSection,
  BoardDetailTitle, BoardDetailContents, BoardDetailBtContainer,
  BoardBtn, BoardDetailBtWrapper, BoardDetailBtnWrap
} from "../../../../styles/01-02-emotions";

export default function BoardDetail() {
  const router = useRouter();
  // console.log(router.query.id);
  const { data } = useQuery(FETCH_BOARD, {
    variables : { 
      number: Number(router.query.id)
    }
  });
  
  return (
    <div>
      <BoardContentsContainer>
      <Wrapper>
        <BoardTopUserInfo>
          <div className="wd8per">
            <Image
              src="/imgs/userphoto.png"
              width={56}
              height={56}
            />
          </div>
          <div className="wd80per">
            <p className="board-userName">{data?.fetchBoard?.writer}</p>
            <p className="board-createdAt">Date: {data?.fetchBoard?.createdAt}</p>
          </div>
          <div className="wd8per">
            <Image
              src="/imgs/ic_link-32px.png"
              width={32}
              height={32}
            />
          </div>
          <div className="wd8per">
            <Image
              src="/imgs/ic_location_on-32px.png"
              width={32}  
              height={32}
            />
          </div>
        </BoardTopUserInfo>
        <BoardBottomSection>
            <BoardDetailTitle>{data?.fetchBoard?.title}</BoardDetailTitle>
            <BoardDetailContents> 
              <Image
                src="/imgs/boardImg.png"
                width={996}
                height={480}
              />
              <p className="mt40 mb120">
              {data?.fetchBoard?.contents}
              </p>
              <div className="flex justi-align-center">
                <Image
                  src="/imgs/video.png"
                  width={486}
                  height={240}
                />
              </div>
            </BoardDetailContents>
            <div className="flex justi-align-center"> 
              <div className="thumbs mr40">
                <Image
                  src="/imgs/ic_thumb_up.png"
                  width={24}
                  height={24}
                />
                <span className="block yellowfont">1920</span>
              </div>
              <div className="thumbs">
                <Image
                  src="/imgs/ic_thumb_down.png"
                  width={24}
                  height={24}
                />
                <span className="block greyfont">1920</span>
              </div>
            </div>
        </BoardBottomSection>
      </Wrapper>
    </BoardContentsContainer>
    <BoardDetailBtContainer>
      <BoardDetailBtWrapper>
        <BoardDetailBtnWrap>
          <BoardBtn>목록으로</BoardBtn>
          <BoardBtn>수정하기</BoardBtn>
          <BoardBtn>삭제하기</BoardBtn>
        </BoardDetailBtnWrap>
        {/* <div> 
          <div>댓글</div> 
          <div>
            <input type="text" /> 
            <input type="text" />
          </div>
        </div> */}
      </BoardDetailBtWrapper>
    </BoardDetailBtContainer>
  </div>
    
    
  )

}