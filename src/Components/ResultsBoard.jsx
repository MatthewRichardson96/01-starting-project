export default function ResultsBoard({ result, calcType }) {
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

  function ResultRow(result, calcType) {
    let tableHeaders = TABLE_HEADERS.map((x) => {
      // I want to map the result to the correct table header
      const headerType = x.type;
      switch (headerType) {
        case "duration":
          return <td key={x.Header}>{result}</td>;
        case "initial-investment":
          return <td key={x.Header}>{result}</td>;
        case "interest-annually":
          return <td key={x.Header}>{result}</td>;
        case "interest-total":
          return <td key={x.Header}>{result}</td>;
        case "investment-capital":
          return <td key={x.Header}>{result}</td>;
        default:
          return null;
      }
    });
    return tableHeaders;
  }

  return (
    <>
      <table id="result">
        <thead>
          <tr>{HeaderRow()}</tr>
        </thead>
        <tbody>
          <tr>{ResultRow(result, calcType)}</tr>
        </tbody>
      </table>
    </>
  );
}
