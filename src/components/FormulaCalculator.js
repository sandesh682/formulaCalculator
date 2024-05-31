import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import styles from "./FormulaCalculator.module.css";

const FormulaCalculator = () => {
  const [number1, setNumber1] = useState(2);
  const [number2, setNumber2] = useState(5);
  const [formula1, setFormula1] = useState("[number1] + [number2]");
  const [formula2, setFormula2] = useState("[formula1] / 2");
  const [formula3, setFormula3] = useState("[formula1] + [formula2]");
  const [results, setResults] = useState({
    formula1: 0,
    formula2: 0,
    formula3: 0,
  });

  const calculateFormula = (formula, scope) => {
    try {
      const evaluatedFormula = formula.replace(
        /\[(.*?)\]/g,
        (_, key) => scope[key]
      );
      return evaluate(evaluatedFormula, scope);
    } catch (e) {
      return "Error";
    }
  };

  useEffect(() => {
    const scope = {
      number1,
      number2,
      formula1: 0,
      formula2: 0,
    };
    scope.formula1 = calculateFormula(formula1, scope);
    scope.formula2 = calculateFormula(formula2, scope);
    scope.formula3 = calculateFormula(formula3, scope);

    setResults({
      formula1: scope.formula1,
      formula2: scope.formula2,
      formula3: scope.formula3,
    });
  }, [number1, number2, formula1, formula2, formula3]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Formula Calculator</h1>
      <div className={styles.inputGroup}>
        <label>Number 1:</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Number 2:</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Formula 1:</label>
        <input
          type="text"
          value={formula1}
          onChange={(e) => setFormula1(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Formula 2:</label>
        <input
          type="text"
          value={formula2}
          onChange={(e) => setFormula2(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Formula 3:</label>
        <input
          type="text"
          value={formula3}
          onChange={(e) => setFormula3(e.target.value)}
        />
      </div>
      <div className={styles.result}>
        <p>
          Formula 1: <strong>{results.formula1}</strong>
        </p>
        <p>
          Formula 2: <strong>{results.formula2}</strong>
        </p>
        <p>
          Formula 3: <strong>{results.formula3}</strong>
        </p>
      </div>
    </div>
  );
};

export default FormulaCalculator;
