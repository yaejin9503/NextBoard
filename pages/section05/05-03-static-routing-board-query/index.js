import { useRouter } from 'next/router'
export default function StaticRoutingPage(){ 
  const router = useRouter(); 

  const onClickMove1 = () => { 
    router.push("/section05/05-03-static-routing-board-moved-query/20742"); 
  }
  const onClickMove2 = () => { 
    router.push("/section05/05-03-static-routing-board-moved-query/20741"); 
  }
  const onClickMove3 = () => { 
    router.push("/section05/05-03-static-routing-board-moved-query/20740"); 
  }

  return ( 
    <div>
      <button onClick={onClickMove1}> 1번 게시글로 이동하기</button>
      <button onClick={onClickMove2}> 2번 게시글로 이동하기</button>
      <button onClick={onClickMove3}> 3번 게시글로 이동하기</button>
    </div>
  )
}