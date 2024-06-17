import CalculationBoard from "./Components/CalculationBoard";
import Header from "./Components/Header";
import ResultsBoard from "./Components/ResultsBoard";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

// The below code needs reviewing and refactoring
function runInvestment(calculationFigures) {
  const values = calculationFigures.map((figure) => Object.values(figure)[0]);

  // mapping the values to the objects needed for the calculateInvestmentResults function
  const [initialInvestment, annualInvestment, expectedReturn, duration] =
    values;

  const returned = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  return returned;
}

function App() {
  // The input value and handleCalculation has been lifted from the calculationBoard.jsx
  const [inputValue, setInputValue] = useState();
  const [calcType, setCalcType] = useState();
  const [calculationFigures, setCalculationFigures] = useState([]);
  let returnedValue = [];

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

  if (calculationFigures.length === 4) {
    returnedValue = runInvestment(calculationFigures);
  }

  return (
    <>
      <header>
        <Header />
      </header>

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
          <ResultsBoard result={returnedValue} />
        </div>
      </main>
    </>
  );
}

export default App;
