import { IQuery } from "../../../../commons/types/generated/types"

interface IProps { 
  data : Pick<IQuery, "fetchBoards"> | undefined
}
export default function BoardList(props : IProps){ 
  return( 
    <>
      {
        props.data?.fetchBoards.map(el => 
        <div key={el._id}>
          <span><input type="checkbox"/></span>
          <span style={{ margin: "10px"}}>{el.title}</span> 
          <span style={{ margin: "10px"}}> {el.writer}</span>
          <span>
            <button id={el._id}>삭제</button>
          </span>
        </div>
        )
      }
    </>
  )
}