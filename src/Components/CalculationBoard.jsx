import { useState } from "react";
export default function CalculationBoard({
  calculationHeader,
  calculationType,
  value,
  onChangeValue,
}) {
  // The below code has been lifted and moved into the App.jsx file as this function will be used by this file and ResultsBoard.jsx
  const [inputValue, setInputValue] = useState();
  const [calcType, setCalcType] = useState();

  function handleChange(event) {
    setInputValue(event.target.value);
    setCalcType(event.target.id);
    value = event.target.value;
    calculationType = event.target.id;
    onChangeValue(value, calculationType);
  }

  return (
    <>
      <div>
        <label id={calculationType}>{calculationHeader}</label>
        <input id={calculationType} onChange={handleChange}></input>
      </div>
    </>
  );
}
