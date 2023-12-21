import { useMutation, gql } from "@apollo/client"

export default function GraphqlMutationPage(){ 

  const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput){
      _id, 
      number,
      message
    }
  }
  `
  const [ createProduct ] = useMutation(CREATE_PRODUCT); 
  const onClickSubmit = async () => { 
    const result = await createProduct({
      variables: {
        seller: "훈이", 
        createProductInput: { 
          name: "마우스", 
          detail: "정말 좋은 마우스", 
          price: 3000
        }
      }
      
    }); 
    console.log(result);
  }

  return( 
    <div>
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </div>
  )
}