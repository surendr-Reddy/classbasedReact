import React, { Component } from 'react'
import ChildClass from "./ChildClass"

export class ParentClass extends Component {
    constructor(props){
        super(props);
        this.state={
          dummyData:{
            userDetails:"dummy"
          },
          name2:"hi"
        }
        
    }
   async componentDidMount(){
      const ApiData= await fetch("https://api.github.com/users/surendr-Reddy");
      const jsonData= await ApiData.json();
      console.log(jsonData);
      this.setState({
        dummyData:{userDetails:jsonData}
      })
    }
    componentDidUpdate(){
      console.log("after state update");
    }
    componentWillUnmount(){
      console.log("componet unmount");
    }
  render() {
    const {name,location}=this.state.dummyData.userDetails
   
    return (
     
      <div>
        <h1>Name:{name}</h1>
        <h2>location:{location}</h2>
        <h3>name2:{this.state.name2}</h3>
      </div>
    )
  }
}

export default ParentClass