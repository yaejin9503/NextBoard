import { useState } from 'react';
import { router } from 'next/router'
import Image from 'next/image'

import {
  Wrapper, BoardContentsContainer, BoardTopUserInfo, BoardBottomSection,
  BoardDetailTitle, BoardDetailContents, BoardDetailBtContainer,
  BoardBtn, BoardDetailBtWrapper, BoardDetailBtnWrap
} from "../../../../../styles/01-02-emotions";
import { useRouter } from 'next/router';

export default function BoardDetail() {

  const router = useRouter();


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
            <p className="board-userName">노원두</p>
            <p className="board-createdAt">Date: 2021.02.18</p>
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
            <BoardDetailTitle>게시글 제목입니다.</BoardDetailTitle>
            <BoardDetailContents> 
              <Image
                src="/imgs/boardImg.png"
                width={996}
                height={480}
              />
              <p className="mt40 mb120">
              가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
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
      </BoardDetailBtWrapper>
    </BoardDetailBtContainer>
  </div>
    
    
  )

}