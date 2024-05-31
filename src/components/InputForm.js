// Import necessary modules
import React from "react";
import styles from "./InputForm.module.css";

// InputForm component for taking user inputs
const InputForm = ({
  number1,
  setNumber1,
  number2,
  setNumber2,
  formula1,
  setFormula1,
  formula2,
  setFormula2,
  formula3,
  setFormula3,
}) => {
  return (
    <div className={styles.inputForm}>
      {/* Input for number 1 */}
      <div className={styles.inputGroup}>
        <label>Number 1:</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
      </div>
      {/* Input for number 2 */}
      <div className={styles.inputGroup}>
        <label>Number 2:</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
      </div>
      {/* Input for formula 1 */}
      <div className={styles.inputGroup}>
        <label>Formula 1:</label>
        <input
          type="text"
          value={formula1}
          onChange={(e) => setFormula1(e.target.value)}
        />
      </div>
      {/* Input for formula 2 */}
      <div className={styles.inputGroup}>
        <label>Formula 2:</label>
        <input
          type="text"
          value={formula2}
          onChange={(e) => setFormula2(e.target.value)}
        />
      </div>
      {/* Input for formula 3 */}
      <div className={styles.inputGroup}>
        <label>Formula 3:</label>
        <input
          type="text"
          value={formula3}
          onChange={(e) => setFormula3(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputForm;
