import React from "react";
import ParentClass from './ParentClass'
class ClassComponet extends React.Component {
  constructor(props) {
    super(props);
    console.log("1st constructor render");
  }
 
  componentDidMount(){
    console.log("3rd componetDidMount");
  }
  render() {
    return (
      <div className="classComonet">
{console.log("2nd render method ")}
      <ParentClass class='parent1' />
      <ParentClass class='parent2'/>
      </div>
    ); 
  }
}
export default ClassComponet;
