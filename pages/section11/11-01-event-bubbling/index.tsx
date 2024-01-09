import { useQuery, gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { MouseEvent } from "react"; 

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

  const onClickDelete = (event: any) => { 
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

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => { 
    alert(event.currentTarget.id + "님이 작성한 글입니다.")
  }

  return ( 
    <div>
      {
        data?.fetchBoards.map((el: any) => 
        <div id={el.writer} key={el.number} onClick={onClickAlert}>
          <span><input type="checkbox"/></span>
          <span style={{ margin: "10px"}}>{el.number}</span>
          <span style={{ margin: "10px"}} >{el.title}</span> 
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