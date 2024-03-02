import React, { Component } from 'react'
import ChildClass from "./ChildClass"

export class ParentClass extends Component {
    constructor(props){
        super(props);
        console.log(`${this.props.class} constructor`);
        
    }
    componentDidMount(){
        console.log(`${this.props.class} componentdidmount`);
    }
  render() {
    return (
      <div>
        { console.log(`${this.props.class} render`)}
        {this.props.class==="parent1"?<ChildClass class='child1' />:<ChildClass class='child2' />}
      </div>
    )
  }
}

export default ParentClass