
import { useState } from 'react'
import { useForm } from "react-hook-form"; 

import { Title, Wrapper, Container, ContentsWrapper, 
  WriterWrapper, InputTextBox, TextAreaContents,
  BlackBtn, UploadBtn, YellowBtn } from "../../../styles/01-02-emotions"

export default function EmotionPage(){ 
  const [ user, setUser ] = useState({}); 
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm(); 
  
  if(errors){ 
    console.log("errors", errors); 
  }

    return (
      <form onSubmit={handleSubmit((data) => {
        console.log(data); 
        setUser(data); 
      })}
      >
        <Container>
        <Wrapper>
          <h1>게시물등록</h1>
          <ContentsWrapper> 
            <WriterWrapper>
              <div className="writerWrapperWidth">
                <Title>작성자</Title>
                <InputTextBox {
                  ...register("writer" , { required: {
                    value : true, 
                    message : "작성자 정보를 입력해주세요."
                  } }) } type="text" className="inputBoxWidth" placeholder="이름을 적어주세요."/>
                <p class="error">{errors.writer?.message}</p>
              </div>
              <div className="pwdWrapperWidth">
                <Title>비밀번호</Title>
                <InputTextBox {...register("pwd" , 
                { 
                  required: {
                    value: true, 
                    message: "비밀번호를 입력해주세요."
                  }, 
                  pattern: { 
                    value :/^[a-zA-Z0-9](?=.*[a-zA-Z])(?=.*[0-9]).{3,12}$/g, 
                    message: "영문과 숫자 조합 3~12 글자로 해주세요."
                  }
                } 
                )} type="password" className="inputBoxWidth" placeholder="비밀번호를 적어주세요."/>
                 <p class="error">{errors.pwd?.message}</p>
              </div>
            </WriterWrapper>
            
            <Title>제목</Title>
            <InputTextBox type="text" {...register("title", { 
              required: {
                value : 'true', 
                message: '제목을 입력해주세요.'
              }
              })} className="inputBoxWidth" placeholder="제목을 작성해주세요." />
           
            <Title>내용</Title>
            <TextAreaContents {...register("contents" , { required: true })} placeholder="내용을 작성해주세요."/>
          
            <div>
              <Title>주소</Title>
              <div className="flex mb16">
                <InputTextBox {...register("zipCode" , 
                { required: true, 
                  maxLength: {
                    value: 5, 
                    message: "최대 길이는 5글자 입니다."
                  } 
                })} type="text" className="postNumInput" placeholder="07250"/>
                <BlackBtn className="pd1416 ml16">우편번호 검색</BlackBtn>
              </div>
              <div>
                <InputTextBox {...register("address1" , { required: true })} type="text" className="inputBoxWidth mb16"/>
                <InputTextBox {...register("address2" , { required: true })} type="text" className="inputBoxWidth"/>
              </div>
            </div>
            <div>
              <Title>유튜브</Title>
              <InputTextBox {...register("youtube")} type="text" className="inputBoxWidth" placeholder="링크를 복사해주세요."/>
            </div>
            <div>
              <Title>사진 첨부</Title>
              <UploadBtn className="pd18 mr24">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_39_1905)">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#4F4F4F"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_39_1905">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <div>Upload</div>
              </UploadBtn>
              <UploadBtn className="pd18 mr24">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_39_1905)">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#4F4F4F"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_39_1905">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <div>Upload</div>
              </UploadBtn>
              <UploadBtn className="pd18 mr24">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_39_1905)">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#4F4F4F"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_39_1905">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <div>Upload</div>
              </UploadBtn>
            </div> 

            <Title>메인 설정</Title>
            <div>
              <input {...register("mainSetting")} type="radio" name="mainrdo" id="m1" />
              <label for="m1" className="mr20"> 유튜브 </label>
              <input {...register("mainSetting")} type="radio" name="mainrdo" id="m2" /> 
              <label for="m2"> 사진</label>
            </div>
            
            <div className="btnWrapper">
              <input className="pd1460" type="submit" value="등록하기"/>
            </div>
          </ContentsWrapper>  
        </Wrapper>
      </Container>
      </form>
      
    )
}