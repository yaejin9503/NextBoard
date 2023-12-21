import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router";
import { useState } from "react";

export default function GraphqlMutationPage(){ 
  const router = useRouter(); 
  const [ writer, setWriter ] = useState(); 
  const [ title, setTitle ] = useState(); 
  const [ contents, setContents ] = useState(); 

  const setting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id, 
      number,
      message
    }
  }
  `
  const [ myfunction ] = useMutation(setting); 
  const onClickSubmit = async () => { 
    try{ 
      const result = await myfunction({
        variables : { //variables $역할을 함. 
          writer: writer,
          title: title,
          contents: contents
        }
      }); 
      router.push(`/section05/05-03-static-routing-board-moved-query/${result.data.createBoard.number}`)
    }catch(e){ 
      alert(e.message); 
    }
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
    <div>
      작성자: <input type="text"  onChange={onChangeWriter} /> <br/>
      제목: <input type="text" onChange={onChangeTitle} /> <br/>
      내용: <input type="text"  onChange={onChangeContents} /> <br/>
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </div>
  )
}