const CalcButtons = ({ updateCalculation }) => {
  return (
    <div>
      <button onClick={() => updateCalculation("+")}>+</button>
      <button onClick={() => updateCalculation("-")}>-</button>
      <button onClick={() => updateCalculation("*")}>*</button>
      <button onClick={() => updateCalculation("/")}>/</button>
      <button onClick={() => updateCalculation("=")}>=</button>
    </div>
  );
};

export default CalcButtons;
