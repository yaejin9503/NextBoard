import { useMutation, gql } from "@apollo/client"

export default function GraphqlMutationPage(){ 

  const setting = gql`
  mutation{
    createBoard(writer: "철수", title: "안녕하세요", contents: "반가워여"){
      _id, 
      number,
      message
    }
  }
  `
  const [ myfunction ] = useMutation(setting); 
  const onClickSubmit = async () => { 
    const result = await myfunction(); 
    console.log(result);
  }

  return( 
    <div>
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </div>
  )
}