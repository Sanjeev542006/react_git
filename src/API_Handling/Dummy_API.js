import axios from 'axios'
import React from 'react'
function Dummy_API() {
  const handleGet=() =>{
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res =>{
      console.log("res================>",res)
    })
    }
  return (<>
        <h1>Welcome to API Handling</h1>
        <button onClick={handleGet} >Get</button>
  </>
  )
}

export default Dummy_API