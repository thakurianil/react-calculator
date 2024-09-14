const Display = (props) => {
  return (
    <>
      <div className="display1">{props.topDisplay}</div>
      <div className="display">{props.bottomDisplay}</div>
    </>
  );
};

export default Display;
