import styled from '@emotion/styled'; 

export const RedInput = styled.input`
  border-color: red; 
`

export const Btn = styled.button`
  background-color: ${(props) => props.isActive ? "yellow" : "grey" }; 
`