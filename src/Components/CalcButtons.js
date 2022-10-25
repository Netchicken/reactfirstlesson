export const CalcButtons = (props) => {
    

return (
  <div>
    <button onClick={() => props.Calculate("+")}>+</button>
    <button onClick={() => props.Calculate("-")}>-</button>
    <button onClick={() => props.Calculate("X")}>*</button>
    <button onClick={() => props.Calculate("/")}>/</button>
  </div>
);


} 

// default CalcButtons;