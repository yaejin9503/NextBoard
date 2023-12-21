
import axios from 'axios'; 

export default function RestGetPage(){


  const onClickAsync = () => { 
    const result = axios.get('https://koreanjson.com/posts/1'); 
    console.log(result); 
  }

  const  onClickSync = async () => { 
    const result = await axios.get('https://koreanjson.com/posts/1'); 
    console.log(result.data.title); 
  }

  return ( 
    <div>
      <button onClick={onClickAsync}>Rest-api(비동기)</button>
      <button onClick={onClickSync}>Rest-api(동기)</button>
    </div>
  )
}