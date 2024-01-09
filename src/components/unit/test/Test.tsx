interface IExampleProps{ 
  school: string; 
  children: JSX.Element
}

export default function Test(props : IExampleProps){

  return(
    <div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>짱구입니다.</div>
    </div>
  )

}