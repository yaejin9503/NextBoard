import { Dispatch, SetStateAction } from "react";
import { IQuery, IQueryFetchBoardArgs } from "../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

interface IProps{ 
  startPage: number, 
  lastPage: number, 
  setStartPage: Dispatch<SetStateAction<number>>, 
  refetch: (variables?: Partial<IQueryFetchBoardArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery,"fetchBoards">>>
}
export default function PageNation(props : IProps) {
  const { startPage, setStartPage, refetch, lastPage } = props; 

  const onClickPrevPage = () => { 
    if(startPage === 1) return;
    setStartPage(startPage  - 10); 
    void refetch({ page : startPage - 10 }); 
    
  }

  const onClickNextPage = () => { 
    if(startPage + 10 <= lastPage){ 
      setStartPage(startPage  + 10); 
      void refetch({ page : startPage + 10 }); 
    }
  }

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) :void => { 
    void refetch({ page : Number(event.currentTarget.id) }); 
  }


  return (
    <>
      <span onClick={onClickPrevPage}>이전</span>
      {
        new Array(10).fill(1).map((_, index) => (
          index + startPage <= lastPage &&
          <span style={{ marginRight: "10px" }} key={index + startPage} id={String(index + startPage)} onClick={onClickPage}>{index + startPage}</span>
        ))
      }
      <span onClick={onClickNextPage}>다음</span>
    </>
  )
}