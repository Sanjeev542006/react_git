import React from 'react'

const list = () => {
  const arr1 =["shark1","shark2","shark3","shark4","shark5","shark6"]
  return (
    <div>
        <ol type="i" >
            <li>student1</li>
            <li>student2</li>
            <li>student3</li>
            <li>student4</li>
            <li>student5</li>
        </ol>
        <ul type="circle" >
            <li>student1</li>
            <li>student2</li>
            <li>student3</li>
            <li>student4</li>
            <li>student5</li>
        </ul>
        <h1>key values using map function</h1>
        <ol>
          {
            arr1.map((value,index)=>(
              <li key={index}>{value}</li>
            ))
          }
        </ol>
    </div>
  )
}
export default list