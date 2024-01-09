import { useQuery, gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
    query fetchBoards{
      fetchBoards{
        number, 
        writer,
        title,
        contents,
        createdAt
      }
    }`

const DELETE_BOARDS = gql`
    mutation deleteBoard($number: Int){ 
      deleteBoard(number: $number){ 
        message
      }
    }
  `

export default function StaticRoutingMovedPage(){ 
  const router = useRouter(); 
  
  const { data } = useQuery(FETCH_BOARDS); 
  const [ deleteBoard ] = useMutation(DELETE_BOARDS)

  const onClickDelete = (event) => { 
    try{ 
      deleteBoard({
        variables: { 
          number: Number(event.target.id)
        }, 
        refetchQueries: [{ query : FETCH_BOARDS }]
      })
    }catch(e){ 
      console.error(e); 
    }    
  }

  return ( 
    <div>
      {
        data?.fetchBoards.map(el => 
        <div key={el.number}>
          <span><input type="checkbox"/></span>
          <span style={{ margin: "10px"}}>{el.number}</span>
          <span style={{ margin: "10px"}}>{el.title}</span> 
          <span style={{ margin: "10px"}}> {el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>삭제</button>
          </span>
        </div>
        )
      }
       {/* <div> {router.query.qqq}번 페이지 이동이 완료되었습니다. </div>
       <div> 작성자: { data?.fetchBoard?.writer }</div>
       <div> 제목: { data?.fetchBoard?.title }</div>
       <div> 내용: { data?.fetchBoard?.contents }</div> */}
    </div>
  )
}