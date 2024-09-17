
const Button = (props) => {
  const cN = props.cN;
  const value = props.value;
  const opFunction = props.calculatorFunc;

  return (
    <>
      <div className={cN} onClick={() => opFunction(value)}>
        {value}
      </div>
    </>
  );
};

export default Button;

