import { useState } from "react";
import "./App.css";
import ButtonComponent from "./component/Button";
import Display from "./component/Display";

function App() {
  const operatorList = ["/", "x", "*", "-", "+", "=", "%"];
  const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialCharacterList = [".", "Enter"];
  let [topDisplay, setTopDisplay] = useState("");
  let [bottomDisplay, setbottomDisplay] = useState("0");
  let [result, setResult] = useState("");
  const calculateValue = (operationString) => {
    let result = "";
    try {
      if (operationString === "") {
        result = "0";
      } else {
        result = eval(operationString);
      }
    } catch (e) {
      result = "0";
    }
    return result;
  };
  function getLastNumber(numInput) {
    let highestIndex = {
      index: 0,
      symbol: ",",
    };
    // ["/", "x", "*", "-", "+", "=", "%"];

    for (let operator of operatorList) {
      let operatorIndex = numInput.lastIndexOf(operator);
      if (operatorIndex > highestIndex.index) {
        highestIndex.index = operatorIndex;
        highestIndex.symbol = operator;
      }
    }

    let numInputArray = numInput.split(highestIndex.symbol);
    console.log(numInputArray);
    return numInputArray[numInputArray.length - 1];
  }
  function allowDot(numInput) {
    let lastExpression = getLastNumber(numInput);
    if (lastExpression.includes(".")) {
      return false;
    } else {
      return true;
    }
  }

  let addToDisplay = (str) => {
    console.log(str);
    
    let topResult = topDisplay;
    let bottomResult = bottomDisplay;
    switch (str.toLowerCase()) {
      case "c":
        topResult = "";
        break;
      case "del":
        topResult = topResult.substr(0, topResult.length - 1);
        break;
      case "%":
      case "/":
      case "x":
      case "-":
      case "+":
      case "*":
        if (topResult.length > 0) {
          if (str == "x") {
            str = "*";
          }
          topResult = topResult + str;
        }
        break;
      case "=":
      case "enter":
        break;
      case ".":
        if (allowDot(topResult)) {
          topResult = topResult + str;
        }
        break;
      default:
        topResult = topResult + str;
        break;
    }
    setTopDisplay(topDisplay);
    bottomResult = calculateValue(topResult);
    setbottomDisplay(bottomDisplay);
  };

  const addFunc = (op) => {
    setResult(result + op);
  };

  const deleteFunc = () => {
    setResult("");
  };

  const evaluateFunc = () => {
    setResult(eval(result));
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
      <div className="container">
        <Display
          topDisplay={topDisplay}
          bottomDisplay={bottomDisplay}
        ></Display>
        {buttons.map((btn, i) => {
          return <ButtonComponent key={i} {...btn} calculatorFunc={addToDisplay}></ButtonComponent>;
        })}
      </div>
    </div>
  );
}

export default App;
