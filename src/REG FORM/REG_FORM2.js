import React from 'react'

const REG_FORM2 = (props) => {
  return (
    <body style={{  backgroundColor:"lightblue", border:"3px", borderRadius: "10px",borderColor: "black",borderStyle: "dotted"}}>
    <h1>REGISTRATION FORM</h1>
    <table>
    <tr><td><pre> First Name      : </pre></td><td style={{color:"red",fontSize:"25px"}}>{props.fname1} </td></tr>
    <tr><td><pre> Last Name       : </pre></td><td style={{color:"red",fontSize:"25px"}}>{props.lname1} </td></tr>
    <tr><td><pre> DateOfBirth     : </pre></td><td style={{color:"red",fontSize:"25px"}}>{props.dob1}</td></tr>
    <tr><td><pre> Registration No : </pre></td><td style={{color:"red",fontSize:"25px"}}>{props.regno1} </td></tr>
    <tr><td><pre> Department      : </pre></td><td style={{color:"red",fontSize:"25px"}}>{props.dept1}</td></tr>
    </table>
    <pre> <input type="datetime-local"></input></pre>
      </body>
    )
}

export default REG_FORM2