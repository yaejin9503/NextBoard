import { RedInput, Btn } from './BoardWrite.styles'

export default function BoardWriteUI(props){
  return(
    <div>
      작성자: <RedInput 
              type="text"  
              onChange={props.onChangeWriter} 
              /> <br/>
      제목: <RedInput type="text" onChange={props.onChangeTitle} /> <br/>
      내용: <RedInput type="text"  onChange={props.onChangeContents} /> <br/>
      <Btn 
        onClick={props.onClickSubmit}
        isActive={props.isActive} 
      >
        GraphQL-API 요청하기</Btn>
    </div>
  )
} 