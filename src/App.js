import { useState } from "react";
import "./App.css";
import ButtonComponent from "./component/Button";
import Display from "./component/Display";
let [topDisplay, setTopDisplay] = useState("");
let [bottomDisplay, setbottomDisplay] = useState("0");


let addToDisplay = (str) => {
  let topResult = topDisplay;
  let bottomResult = bottomDisplay;

  setTopDisplay(topDisplay);
  setbottomDisplay(bottomDisplay);
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

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Display></Display>
        {buttons.map((btn, i) => {
          return <ButtonComponent key={i} {...btn}></ButtonComponent>;
        })}
      </div>
    </div>
  );
}

export default App;
