const Button = (props) => {
    const cN= props.cN;
const value = props.value;
    
  return <>

    <div className={cN} onClick>{value}</div>
  </>;
};

export default Button;

// ()=>opfunction(operator)