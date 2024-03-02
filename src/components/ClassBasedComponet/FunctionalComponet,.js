import { useState } from "react";

const FunctionalComponet = (props) => {
  const [fun, setFun] = useState(0);
  return (
    <div className="funComonet">
      <h1>This is from FunctionalComponet count:{fun}</h1>
      <h3>{props.name}</h3>
      <button onClick={() => setFun(fun + 1)}>funClick</button>
    </div>
  );
};
export default FunctionalComponet;
