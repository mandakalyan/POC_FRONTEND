// Report.js
import React from "react";

function Report({ report }) {
  return (
    <div>
      <h2>Comparison Report</h2>
      <table>
        <thead>
          <tr>
            <th>Row Number</th>
            <th>Matched</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(report).map(([rowNumber, matched]) => (
            <tr key={rowNumber}>
              <td>{rowNumber}</td>
              <td>{matched}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;
