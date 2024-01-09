import { useQuery, gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs, IQueryFetchBoardsCountArgs } from "../../src/commons/types/generated/types";
import { useState } from "react";
import PageNation from "../../src/components/commons/PageNation";
import BoardList from "../../src/components/unit/board/list/BoardList";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
      fetchBoards(page: $page){
        _id, 
        writer,
        title,
        contents,
        createdAt
      }
    }`

const FETCH_BOARD_COUNT = gql`
  query { 
    fetchBoardsCount
  }
`

export default function StaticRoutingMovedPage(){ 
  const router = useRouter(); 
  const [ startPage, setStartPage ] = useState(1); 
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(FETCH_BOARDS); 
  const { data: dataBoardCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARD_COUNT); 

  const lastPage = Math.ceil((dataBoardCount?.fetchBoardsCount ?? 10) / 10);

  
  return ( 
    <div>
      <BoardList data={data} /> 
      <PageNation 
        startPage={startPage} 
        lastPage={lastPage}
        setStartPage={setStartPage} 
        refetch={refetch}
        />
    </div>
  )
}


// const DELETE_BOARDS = gql`
//     mutation deleteBoard($number: Int){ 
//       deleteBoard(number: $number){ 
//         message
//       }
//     }
//   `

 // const [ deleteBoard ] = useMutation(DELETE_BOARDS)

  // const onClickDelete = (event) => { 
  //   try{ 
  //     deleteBoard({
  //       variables: { 
  //         number: Number(event.target.id)
  //       }, 
  //       refetchQueries: [{ query : FETCH_BOARDS }]
  //     })
  //   }catch(e){ 
  //     console.error(e); 
  //   }    
  // }