import React from 'react'

const Child = (props) => {
  return (
  <body>
    <div style={{backgroundColor:"palegreen"}}>This is Child</div>
    <div style={{color: "darkblue",backgroundColor: "slategrey" }}>
    <h1 style={{fontFamily:"monospace",textAlign:"center",border:"50px",width:"1550px",height:"25px",textEmphasisColor:"green"}}>{props.document }</h1>
    <h2 style={{fontFamily:"monospace",textAlign:"center",border:"50px",width:"1550px",height:"25px",textEmphasisColor:"green"}}>{props.document1}</h2>  
  </div>
  </body>
  )
}

export default Child