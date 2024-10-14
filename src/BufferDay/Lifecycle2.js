import React, { Component } from 'react'

class Lifecycle2 extends Component {
  state={number:0}
  handleadd=() => {
        this.setState({count:this.state.number+2})
  }
  
//   componentDidMount(){
//     console.log("Lets say one two 3");
//     // alert("Hellooooooo");
//   }

//   componentDidUpdate(){
//     window.alert("Hellooooooo for update");
//     console.log("first");
// }
  render() {
    return (
        <>
      <div>Lifecycle2
        <button onClick={this.handleadd}>+</button>
        <label>{this.state.number}</label>
      </div>
        </>
    )
  }
}

export default Lifecycle2