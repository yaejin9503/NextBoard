import styled from "@emotion/styled";

export const TopContaniner = styled.section`
  height: 180px;
`
export const TopWrapper = styled.div`
  display: flex;
  max-width: 100%;
  width: 1200px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  height: inherit;
`

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
` 

export const UserToolTip = styled.div`
  position: absolute;
  top: 17%;
  right: 8%;
  z-index: ;
  width: 258px;
  border-radius: 16px;
  padding: 20px;
  background-color: #ffffff;
  // box-shadow: 3px -4px teal;
`

export const UserToolTipInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 19px 20px;
  border-bottom: 1px solid #EFEFEF;
`

export const UserToolTipText = styled.div`
  text-align: left;
  padding: 20px;
  color: var(--Gray-4, #BDBDBD);
  font-size: 14px;
`

export const UserToolTipInfoText = styled.span`
  font-size: ${(props) => props.fontSize} 
`
export const MiddleContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: black;
`

export const MiddleWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  height: inherit
`

export const BottomContainer = styled.section`
  height : 64px; 
  background: var(--Main, #FFD600);
`