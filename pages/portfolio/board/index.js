import Image from 'next/image';
import { TopContaniner, TopWrapper, 
  User, UserToolTip, UserToolTipInfo, UserToolTipText , 
  UserToolTipInfoText, MiddleContainer, MiddleWrapper,
  BottomContainer 
 } from '../../../styles/boards/unit/boardList.styles'

export default function Board(){ 
  return(
    <>  
      <TopContaniner className="">
        <TopWrapper>
          {/* user-top */}  
          <Image src="/imgs/logo_.png" width={236} height={36}/>
          <div>
            <User>
              <Image src="/imgs/ic_profile.png" width={48} height={48}></Image>
              <Image src="/imgs/ic_ more.png" width={24} height={24}></Image>
            </User>
            <UserToolTip>
              <UserToolTipInfo>
                <Image src="/imgs/ic_profile.png" width={48} height={48}></Image>
                <p className="ml16">
                  <UserToolTipInfoText fontSize={"16px"}>노원두</UserToolTipInfoText><br/> 
                  <UserToolTipInfoText fontSize={"14px"}>100,000p</UserToolTipInfoText>
                </p>
              </UserToolTipInfo>
              <UserToolTipText className="borderbt">충전하기</UserToolTipText>
              <UserToolTipText>로그아웃</UserToolTipText>
            </UserToolTip>
          </div>
          {/* // user-top */}
        </TopWrapper>
      </TopContaniner>
      <MiddleContainer>
        <MiddleWrapper style={{ color : "#ffffff" }}> 
          practice make perfact; 
        </MiddleWrapper>
      </MiddleContainer>
      <BottomContainer>
        <nav>
          <ul>
            <li>자유 게시판</li>
            <li>중고 마켓</li>
            <li>마이 페이지</li>
          </ul>
        </nav>
      </BottomContainer>
    </> 
  )
}