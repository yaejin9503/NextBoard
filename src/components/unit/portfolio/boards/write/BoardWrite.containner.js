import { useState } from 'react'
import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router";

import BoardWriteUI from "./BoardWrite.presenter"

export default function BoardWrite(){ 


  const router = useRouter(); 
  const [ createBoard ] = useMutation(CREATE_BOARD); 
  const [ user, setUser] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  if (Object.keys(errors).length > 0) {
    console.log("errors", errors);
  }

  return( 
    <BoardWriteUI/> 
  )
}