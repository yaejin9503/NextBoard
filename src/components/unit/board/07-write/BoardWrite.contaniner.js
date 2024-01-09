import { useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { setting } from './BoardWrite.queries';
export default function BoardWrite(){
  
  const [ isActive, setIsActive ] = useState(false); 
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
    if(e.target.value  && title && contents){ 
      setIsActive(true); 
    }else{ 
      setIsActive(false); 
    }
  }

  const onChangeTitle = (e) => { 
    setTitle(e.target.value);
    if(writer  && e.target.value && contents){ 
      setIsActive(true); 
    }else{ 
      setIsActive(false); 
    }
  }

  const onChangeContents = (e) => { 
    setContents(e.target.value);

    if(writer  && title && e.target.value){ 
      setIsActive(true); 
    }else{ 
      setIsActive(false); 
    }
  }  

  return(
    <BoardWriteUI 
      onChangeContents={onChangeContents}
      onChangeTitle={onChangeTitle}
      onChangeWriter={onChangeWriter}
      onClickSubmit={onClickSubmit}
      isActive={isActive}
    />
  )
} 
  