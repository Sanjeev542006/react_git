import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
    state = {num:0,data:""}
    // state = {input:""}
    handleChange = () =>{
        this.setState({num:this.state.num+1})
    }
    handleCapture = (e) =>{
      this.setState({data:e.target.value})
    }
  render() {
    return (
        <>
 <center style={{backgroundColor:"palegreen"}}>
    <button onClick={this.handleChange}  style={{color:"chocolate",fontFamily:"monospace",backgroundColor:"seashell"}}>Click</button>
    <button style={{color:"chocolate",fontFamily:"monospace",backgroundColor:"seashell"}} onClick={() => {
      this.setState({num:0})
    }}>resetCount</button>
    <ComponentB name ={this.state.num} value={this.state.data}/>
    {/* <input onChange={this.handleCapture}></input> */}
 </center>
        </>
    )
  }
}

export default ComponentA