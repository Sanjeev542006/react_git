import React, { Component } from 'react'
import REG_FORM2 from './REG_FORM2'

class REG_FORM1 extends Component {
  state = {fname:"",lname:"",dob:"",regno:"",dept:""}
  getfname =(fn)=>{
    this.setState({fname:fn.target.value})
  }
  getlname =(ln)=>{
    this.setState({lname:ln.target.value})
  }
  getdob =(db)=>{
    this.setState({dob:db.target.value})
  }
  getregno =(rn)=>{
    this.setState({regno:rn.target.value})
  }
  getdept =(dt)=>{
    this.setState({dept:dt.target.value})
  }
  render() {
    return (
    <body style={{fontFamily:"monospace",fontWeight:"5px"}} >
      <center>
        <pre>

        </pre>
      <div style={{ backgroundColor: "antiquewhite" ,border: "3px",borderRadius:" 10px",borderColor: "black",borderStyle: "double" }}>
      <div>REG_FORM1</div>
      <table>
      <tr><td id="op"><pre>First Name    : </pre></td><td><input onChange={this.getfname}/></td></tr>
      <tr><td id="op"><pre>Last Name     : </pre></td><td><input onChange={this.getlname}></input></td></tr>
      <tr><td id="op"><pre>Date Of Birth : </pre></td><td><input type="date" onChange={this.getdob}></input></td></tr>
      <tr><td id="op"><pre>Reg_No        : </pre></td><td><input onChange={this.getregno}></input></td></tr>
      <tr><td id="op"><pre>Department    : </pre></td><td><input onChange={this.getdept}></input></td></tr>
      </table>
      </div>
      <br></br>
      <REG_FORM2 fname1 = {this.state.fname} lname1={this.state.lname} 
        dob1 = {this.state.dob} regno1 = {this.state.regno} dept1={this.state.dept} sec1 = {this.state.sec}
        />
      <button type="submit" >SUBMIT</button>
      <button type="reset" >RESET</button>
      </center>
      </body>
    )
  }
}

export default REG_FORM1