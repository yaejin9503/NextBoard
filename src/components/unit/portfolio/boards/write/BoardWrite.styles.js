
export const Title = styled.div`
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:#000000;
margin-top: 40px;
margin-bottom: 17px;
`
export const Container = styled.div`
display: flex;
align-content: center;
justify-content: center;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--White, #FFF);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.20);
  width: 1200px;
  padding: 60px 100px;

`

export const ContentsWrapper = styled.div`
  width: 100%;
`

export const WriterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const InputTextBox = styled.input`
  border: 1px solid var(--Gray-4, #BDBDBD);
  background: var(--White, #FFF);
  display:block;
  color:#BDBDBD;
  padding: 14px 16px;
`

export const TextAreaContents = styled.textarea`
  border: 1px solid var(--Gray-4, #BDBDBD);
  background: var(--White, #FFF);
  color:#BDBDBD;
  width: 100%;
  height: 480px;
  flex-shrink: 0;
  padding: 14px 16px;
`

export const BlackBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--Black, #000);
  color: #ffffff;
`

export const YellowBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--Main, #FFD600);
  color: #000000;
  border: none;
`

export const UploadBtn = styled.button`
  background: var(--Gray-4, #BDBDBD);
  color: var(--Gray-2, #4F4F4F);
  font-family: Noto Sans CJK KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`
