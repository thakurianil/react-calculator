import { useState } from "react";
import "./App.css";
import ButtonComponent from "./component/Button";
import Display from "./component/Display";

function App() {
  const operatorList = ["/", "*", "-", "+", "=", "%"];

  const [topDisplay, setTopDisplay] = useState("");
  const [bottomDisplay, setBottomDisplay] = useState("0");

  const calculateValue = (operationString) => {
    let result = "";
    console.log(typeof(operationString));
    
    try {
      if (operationString === "" ) {
        result = "0";
      } else {
        result = eval(operationString);
      }
    } catch (e) {
      result = "0";
    }
    return result;
  };

  const addToDisplay = (str) => {
    
    let topResult = topDisplay;
    let bottomResult = bottomDisplay;

    switch (str.toLowerCase()) {
      case "c":
        topResult = "";

        break;
      case "ac":
        topResult = topResult.slice(0, -1);
        break;
 

      case "=":
        bottomResult = calculateValue(topResult);
        topResult = String(bottomResult);
        console.log(typeof topResult, topResult);

        break;
  
      default:
        topResult += str;
        break;
    }

    setTopDisplay(topResult);
    if (str === "=") {
      setBottomDisplay(bottomResult);
    }
  };

  const buttons = [
    { cN: "btn btn-AC", value: "AC" },
    { cN: "btn btn-C", value: "C" },
    { cN: "btn btn-modulus", value: "%" },
    { cN: "btn btn-divide", value: "/" },
    { cN: "btn btn-9", value: "9" },
    { cN: "btn btn-8", value: "8" },
    { cN: "btn btn-7", value: "7" },
    { cN: "btn btn-multiply", value: "*" },
    { cN: "btn btn-6", value: "6" },
    { cN: "btn btn-5", value: "5" },
    { cN: "btn btn-4", value: "4" },
    { cN: "btn btn-minus", value: "-" },
    { cN: "btn btn-3", value: "3" },
    { cN: "btn btn-2", value: "2" },
    { cN: "btn btn-1", value: "1" },
    { cN: "btn btn-plus", value: "+" },
    { cN: "btn btn-0", value: "0" },
    { cN: "btn btn-dot", value: "." },
    { cN: "btn btn-equal", value: "=" },
  ];

  return (
    <div className="wrapper">
        <h1>Calculator </h1>

      <div className="container">
        <Display topDisplay={topDisplay} bottomDisplay={bottomDisplay} />
        {buttons.map((btn, i) => (
          <ButtonComponent key={i} {...btn} calculatorFunc={addToDisplay} />
        ))}
      </div>
    </div>
  );
}

export default App;
