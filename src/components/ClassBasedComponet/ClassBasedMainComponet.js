import ClassComponet from "./ClassComponet";
import  FunctionalComponet  from "./FunctionalComponet,";
const ClassBasedMainComponet = function () {
  return (
    <div className="main">
      <div className="class-Based">
        <ClassComponet name="Namaste akshay" age="20" />
      </div>
      <div className="functional-Based">
        <FunctionalComponet name ="Namaste class" />
      </div>
    </div>
  );
};
export default ClassBasedMainComponet;
