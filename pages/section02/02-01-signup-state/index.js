import { useState } from 'react'

export default function SignupStatePage(){ 

  const [ email, setEmail ] = useState(""); 
  const [ pwd, setPwd ] = useState(""); 
  const [ myError, setMyError] = useState("");


  function onChangeEmail(event){ 
    setEmail(event.target.value); 
  }

  function onChangePwd(event){ 
    setPwd(event.target.value);
  }


  function onClickSignUp(){ 
    console.log(email); 
    console.log(pwd);
    // 검증하기 
    if(email.includes("@") === false ){ 
      setMyError("이메일이 올바르지 않습니다. @가 없음!")
    }else{ 
      // 백엔드 컴퓨터에 보내주기 

          // 성공알람 보여주기 
      alert('회원 가입을 축하합니다.'); 
    }
  }

  return ( 
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <div>{myError}</div>
      비밀번호: <input type="password" onChange={onChangePwd}  />
      <button onClick={onClickSignUp}>회원가입</button>
    </div>
  )
}