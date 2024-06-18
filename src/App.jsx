import CalculationBoard from "./components/CalculationBoard";
import Header from "./components/Header";
import ResultsBoard from "./components/ResultsBoard";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  // The input value and handleCalculation has been lifted from the calculationBoard.jsx
  const [inputValue, setInputValue] = useState();
  const [calcType, setCalcType] = useState();
  const [calculationFigures, setCalculationFigures] = useState([]);
  let returnedValue = [];
  let inputIsValid = false;

  function handleCalculation(value, calculationType) {
    setInputValue(value);
    setCalcType(calculationType);

    setCalculationFigures((prevCalculationFigures) => {
      const index = prevCalculationFigures.findIndex(
        (figure) => Object.keys(figure)[0] === calculationType
      );
      if (index !== -1) {
        // If an object with the same calculationType exists, update its value
        return [
          ...prevCalculationFigures.slice(0, index),
          { [calculationType]: value },
          ...prevCalculationFigures.slice(index + 1),
        ];
      } else {
        // If no such object exists, add a new one
        return [...prevCalculationFigures, { [calculationType]: value }];
      }
    });
  }

  function runInvestment(calculationFigures) {
    const values = calculationFigures.map((figure) => Object.values(figure)[0]);

    // mapping the values to the objects needed for the calculateInvestmentResults function
    const [initialInvestment, annualInvestment, expectedReturn, duration] =
      values;

    inputIsValid = duration >= 1;
    const returned = calculateInvestmentResults({
      initialInvestment: parseFloat(initialInvestment),
      annualInvestment: parseFloat(annualInvestment),
      expectedReturn: parseFloat(expectedReturn),
      duration: parseInt(duration),
    });
    return returned;
  }
  if (calculationFigures.length === 4) {
    returnedValue = [];
    returnedValue = runInvestment(calculationFigures);
  }

  return (
    <>
      <Header />

      <main>
        <div id="user-input">
          <div className="input-group">
            <CalculationBoard
              calculationHeader="Initial Investment"
              calculationType="initial-investment"
              onChangeValue={handleCalculation}
              value={inputValue}
            />
            <CalculationBoard
              calculationHeader="Annual Investment"
              calculationType="annual-investment"
              onChangeValue={handleCalculation}
              value={inputValue}
            />
          </div>
          <div className="input-group">
            <CalculationBoard
              calculationHeader="Expected Return"
              calculationType="expected-return"
              onChangeValue={handleCalculation}
              value={inputValue}
            />
            <CalculationBoard
              calculationHeader="Duration"
              calculationType="duration"
              onChangeValue={handleCalculation}
              value={inputValue}
            />
          </div>
        </div>
        <div id="results">
          {inputIsValid ? (
            <ResultsBoard result={returnedValue} />
          ) : (
            <p className="center">
              Enter the investment details to see results
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
