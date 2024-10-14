import React, { Component } from 'react'

class un extends Component {
    state = {name:"WELCOME BUDDY"}
    change_name = () =>{
      let lname = (this.state.name=="Sanjeev")?"CHANGES REVERSED":"Sanjeev";
        this.setState({name:lname})
    } 
    change_name1 = () =>{
      this.setState({name:"user name"})
  } 
  render() {
    return (
    <div>
        <center>
            <h1 style={{fontFamily:'monospace',color:"blueviolet"}}>{this.state.name}</h1>
            <button onClick={this.change_name} onclick={this.change_name1}
            style={{color:"red"}} >CLICK TO CHANGE THE NAME BUDDY</button>
        </center>
    </div>
    )
  }
}

export default un