import React, { Component } from 'react'

class Lifecycle extends Component {
    state={count:1};
    handleadd =()=>{
        this.setState({count:this.state.count+1})

    }
    handlediff =()=>{
        this.setState({count:this.state.count-1})
    }

    componentDidMount = () =>{
        console.log("mount-----><-----mount");
    }
    componentDidUpdate =()=>{
        console.log("update-----><-----update");
    }
    componentWillUnmount=()=>{
        console.log("Unmount-----><-----Unmount");
    }
  render() {
    return (
      <div>
        <h2>
        <center>
        <button onClick={this.handleadd} >+</button><br/>
        <label>{this.state.count} </label><br/>
        <button onClick={this.handlediff} >-</button>
        {/* <this.componentDidMount/> */}
        </center>
        </h2>
      </div>
    )
  }
}

export default Lifecycle