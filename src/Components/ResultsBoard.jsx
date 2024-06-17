export default function ResultsBoard({ result, calculationType }) {
  const TABLE_HEADERS = [
    { Header: "Year" },
    { Header: "Investment Value" },
    { Header: "Interest(Year)" },
    { Header: "Total Interest" },
    { Header: "Invested Capital" },
  ];

  function HeaderRow() {
    let tableHeaders = TABLE_HEADERS.map((x) => (
      <th key={x.Header}>{x.Header}</th>
    ));
    console.log(tableHeaders);
    return tableHeaders;
  }

  console.log("result passed: " + calculationType + " - " + result);

  return (
    <>
      <table id="result">
        <thead>
          <tr>{HeaderRow()}</tr>
        </thead>
        <tbody>
          <tr>
            <td key="tempValue">{result}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
