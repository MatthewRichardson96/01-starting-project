import { formatter } from "../util/investment";

export default function ResultsBoard({ result }) {
  const TABLE_HEADERS = [
    { type: "duration", Header: "Year" },
    { type: "initial-investment", Header: "Investment Value" },
    { type: "interest-annually", Header: "Interest(Year)" },
    { type: "interest-total", Header: "Total Interest" },
    { type: "investment-capital", Header: "Invested Capital" },
  ];

  function HeaderRow() {
    let tableHeaders = TABLE_HEADERS.map((x) => (
      <th key={x.Header} id={x.Header}>
        {x.Header}
      </th>
    ));
    return tableHeaders;
  }

  function ResultRow() {
    if (result.length > 0) {
      const InitialInvestment =
        result[0].valueEndOfYear -
        result[0].interest -
        result[0].annualInvestment;
      return result.map((item) => {
        const totalInterestValue =
          item.valueEndOfYear -
          item.annualInvestment * item.year -
          InitialInvestment;
        const totalAmountInvested = item.valueEndOfYear - totalInterestValue;

        return (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(totalInterestValue)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        );
      });
    }
    return null;
  }

  return (
    <>
      <table id="result">
        <thead>
          <tr>{HeaderRow()}</tr>
        </thead>
        <tbody>{ResultRow()}</tbody>
      </table>
    </>
  );
}
