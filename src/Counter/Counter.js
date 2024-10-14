import React, { Component } from 'react'

class Counter extends Component {
  state = {count:1}
  handleAdd =()=>{
    this.setState({count:this.state.count+1})  
  }
  handleSub = () =>{
    this.setState({count:this.state.count-1})  
  }
  render() {
    return (
    <div><center>
      {/* <style>{`

        *{
            background-color:palegreen;
          }
        .button1{
          color:blue;
          font-family:monospace;
          background-color:tomato;
        }
        .button2{
          color:paleblue;
          font-family:monospace;
          background-color:blue;
        }
          h1{
          color:green;}
      `}
      </style> */}
    <h1>Welcome to Counter</h1>
    <button onClick={this.handleAdd} className='button1'>+</button>
    <h2>{this.state.count}</h2>
    <button onClick={this.handleSub} className='button2'>-</button>
    </center>
    </div>
    )
  }
}

export default Counter