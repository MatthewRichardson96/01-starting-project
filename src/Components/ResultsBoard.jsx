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
      console.log("this", result);
      let resultData = result.map((item) => (
        <tr>
          <td key={item.year}>{item.year}</td>
          <td key={item.annualInvestment}>{item.annualInvestment}</td>
          <td key={item.valueEndOfYear}>{item.valueEndOfYear}</td>
          <td key={item.interest}>{item.interest}</td>
        </tr>
      ));

      return resultData;
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
