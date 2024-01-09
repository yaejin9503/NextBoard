import { useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { setting } from './BoardWrite.queries';
export default function BoardWrite(){
  
  const [ writer, setWriter ] = useState(); 
  const [ title, setTitle ] = useState(); 
  const [ contents, setContents ] = useState(); 


  const [ myfunction ] = useMutation(setting); 
  const onClickSubmit = async () => { 
    const result = await myfunction({
      variables : { //variables $역할을 함. 
        writer: writer,
        title: title,
        contents: contents
      }
    }); 
    console.log(result);
  }

  const onChangeWriter = (e) => { 
    setWriter(e.target.value); 
  }

  const onChangeTitle = (e) => { 
    setTitle(e.target.value); 
  }

  const onChangeContents = (e) => { 
    setContents(e.target.value);
  }  

  return(
    <BoardWriteUI 
      onChangeContents={onChangeContents}
      onChangeTitle={onChangeTitle}
      onChangeWriter={onChangeWriter}
      onClickSubmit={onClickSubmit}
    />
  )
} 
  