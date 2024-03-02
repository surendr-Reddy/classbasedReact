import React, { Component } from 'react'

export class ChildClass extends Component {
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
      </div>
    )
  }
}
export default ChildClass