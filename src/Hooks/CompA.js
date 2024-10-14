import React, { useState } from 'react'

const CompA = () => {
      const[name,setName] = useState("IT-C");
  return (
    <>
    <div>
    <h2>
      Component A -
      This is Parent
    </h2>
    </div>
    <Child1 name={name}/>
    </>

  )
}

const Child1=({name})=>{
  return(<>
       <h1>Hello</h1>
       {name}
</>)
}

function Child2(){
  return(<>

</>)
}

function Child3(){
  return(<>

</>)
}

export default CompA