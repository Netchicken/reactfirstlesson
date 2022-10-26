const ButtonKeyPad = (props) => {
  const buttons = [];

  for (let i = 0; i < 10; i++) {
    buttons.push(
      <button onClick={() => props.updateCalculation(i)} key={i}>
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
};
export default ButtonKeyPad;
