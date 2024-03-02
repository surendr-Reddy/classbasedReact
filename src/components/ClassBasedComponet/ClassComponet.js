import React from "react";
class ClassComponet extends React.Component {
  constructor(props) {
// to acces this keyward in side this method    
    super(props);


//state variable
    this.state = {
      count: 0,
      count2:0,
      count1:0
    };

    console.log("constructor first render",this.state.count);
    
  }
 
  render() {

    // destruting
    const {age}=this.props
    console.log("render() second render");
    console.log(" every state variable render the method render() will re render  second render");
    return (
      <div className="classComonet">

        <h1>This is from ClassBasedComponet count:{this.state.count}</h1>
        <h1>count2:{this.state.count2}</h1>
        <h2>name from props:{this.props.name}</h2>
        <h3>{age}</h3>

        <button
        
          onClick={() => {
            //upadateing state variable bu call back function
            this.setState((previ)=>({count:previ.count+1}))
            // upadateing state variable
          //   this.setState({ count: this.state.count + 1,count2: this.state.count2 + 1 });
           }}
        >
          classClick
        </button>
      </div>
    );
  }
}
export default ClassComponet;
