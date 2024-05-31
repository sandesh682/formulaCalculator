// Import necessary modules
import React from "react";
import styles from "./Results.module.css";

// Results component for displaying calculated results
const Results = ({ results }) => {
  // Function to check if a result is an error
  const isError = (result) =>
    typeof result === "string" && result.toLowerCase() === "error";

  return (
    <div className={styles.resultsContainer}>
      <table className={styles.resultsTable}>
        <thead>
          <tr>
            <th>Formula</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr className={isError(results.formula1) ? styles.errorRow : ""}>
            <td>Formula 1</td>
            <td className={styles.resultValue}>{results.formula1}</td>
          </tr>
          <tr className={isError(results.formula2) ? styles.errorRow : ""}>
            <td>Formula 2</td>
            <td className={styles.resultValue}>{results.formula2}</td>
          </tr>
          <tr className={isError(results.formula3) ? styles.errorRow : ""}>
            <td>Formula 3</td>
            <td className={styles.resultValue}>{results.formula3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;
