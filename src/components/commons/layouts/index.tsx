export default function Layout(props: any){ 

  return( 
    <>
      <div>여기는 헤더</div>
      <div>여기는 배너</div>
      <div>여기는 내비게이션입니다.</div>
      {props.children}
      <div>푸터</div>
    </>
   
  )
}