import CalculationBoard from "./Components/CalculationBoard";
import Header from "./Components/Header";
import ResultsBoard from "./Components/ResultsBoard";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function runInvestment(
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
) {
  if (initialInvestment && annualInvestment && expectedReturn && duration) {
    calculateInvestmentResults();
  }
  console.log("this is the outputted investment:");
}

function App() {
  // The input value and handleCalculation has been lifted from the calculationBoard.jsx
  const [inputValue, setInputValue] = useState();

  function handleCalculation(value, calculationType) {
    console.log("val " + value);
    console.log("calculation type " + calculationType);
    setInputValue(value);
    runInvestment(value);
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
          <ResultsBoard result={inputValue} calculationType="gr" />
        </div>
      </main>
    </>
  );
}

export default App;
