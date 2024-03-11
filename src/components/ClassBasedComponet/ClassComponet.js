import React from "react";
import ParentClass from './ParentClass'
class ClassComponet extends React.Component {
  constructor(props) {
    super(props);
   
  }
 
  componentDidMount(){
  
  }
  render() {
    return (
      <div className="classComonet">

      <ParentClass class='parent1' />
      
      </div>
    ); 
  }
}
export default ClassComponet;
