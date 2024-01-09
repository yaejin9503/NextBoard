import EventEmitter from "events";

export interface IProfile { 
  name : string
  age: number 
  school: string 
  hobby?: string 
}

// 1. Partial 타입 
// type의 모든 요소가 있어도 되고 없어도 되고로 바뀜. 
type aaa = Partial<IProfile>; 

// 2. Required 타임 
// 타입의 모든 요소가 필수적 요소로 변경됨. 
type bbb =Required<IProfile>; 

//3. Pick 타입 
// type에서 골라서 타입을 지정해줄 수 있음. 
type ccc = Pick<IProfile, "name" | "age"> 

//4. Omit 타입 
// 어떤 요소만 제외하고 싶을 때 
type ddd = Omit<IProfile, "school">

// 5. Record 타입 
type eee = "철수" | "영희" | "훈이" // Union 타입
let child:eee = "철수" // 철수, 영희, 훈이만 됨 
let child2: string = "사과" // string 타입이면 다 됨. 

type fff = Record<eee, IProfile> // Record 타입
// eee가 key가 되고 Iprofile 객체가 value가 되는 것임. 

// 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile // "name" | "age" | "school" | "hobby" 
let myprofile: ggg = "age"; 

//7. type vs interface 차이 => 선언병합 

export interface IProfile{ 
  candy:number //선언병합으로 추가됨. 
}

let profile: Partial<IProfile> = { 
  candy : 10
}





