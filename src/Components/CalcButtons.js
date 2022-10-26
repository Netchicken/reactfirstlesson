const CalcButtons = ({ updateCalculation }) => {
  return (
    <div>
      <button onClick={() => updateCalculation("+")}>+</button>
      <button onClick={() => updateCalculation("-")}>-</button>
      <button onClick={() => updateCalculation("*")}>X</button>
      <button onClick={() => updateCalculation("/")}>/</button>
      <button onClick={() => updateCalculation("=")}>=</button>
    </div>
  );
};

export default CalcButtons;
