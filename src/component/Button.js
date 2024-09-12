const Button = (props) => {

    console.log(props);
    
  return <>

    <div className={props.cN}>{props.value}</div>
  </>;
};

export default Button;
