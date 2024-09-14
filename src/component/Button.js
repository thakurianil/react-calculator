const Button = (props) => {
  const cN = props.cN;
  const value = props.value;
  const opFunction = props.calculatorFunc;
  // console.log(props);

  return (
    <>
      <div className={cN} onClick={() => opFunction(value)}>
        {value}
      </div>
    </>
  );
};

export default Button;

// ()=>opfunction(operator)
