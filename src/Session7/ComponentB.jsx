import React from 'react'

const ComponentB = (props) => {
  return (
    <div><center>
        <h1 style={{fontFamily:"monospace",border:"4px",backgroundColor:"salmon",padding:"5px"}}><td><pre>Parent Button Clicked By </pre>
        </td><td style={{color:"blue"}} >{ props.name} </td></h1>
        {/* <h1>{props.value} </h1> */}
    </center>
    </div>
  )
}

export default ComponentB