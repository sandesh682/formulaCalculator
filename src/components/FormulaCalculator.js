// Import necessary modules and components
import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import styles from "./FormulaCalculator.module.css";
import InputForm from "./InputForm";
import Results from "./Results";

const FormulaCalculator = () => {
  // State variables for input numbers
  const [number1, setNumber1] = useState(2);
  const [number2, setNumber2] = useState(5);

  // State variables for formulas
  const [formula1, setFormula1] = useState("[number1] + [number2]");
  const [formula2, setFormula2] = useState("[formula1] / 2");
  const [formula3, setFormula3] = useState("[formula1] + [formula2]");

  // State variable for storing results of formulas
  const [results, setResults] = useState({
    formula1: 0,
    formula2: 0,
    formula3: 0,
  });

  // Function to calculate the result of a formula
  const calculateFormula = (formula, scope) => {
    try {
      // Replace placeholders with actual values from the scope
      const evaluatedFormula = formula.replace(
        /\[(.*?)\]/g,
        (_, key) => scope[key]
      );
      // Evaluate the formula using mathjs
      return evaluate(evaluatedFormula, scope);
    } catch (e) {
      // Return "Error" if formula evaluation fails
      return "Error";
    }
  };

  // useEffect hook to update results when input values or formulas change
  useEffect(() => {
    // Create a scope object to store values for formula calculation
    const scope = {
      number1,
      number2,
      formula1: 0,
      formula2: 0,
    };
    // Calculate the results for each formula
    scope.formula1 = calculateFormula(formula1, scope);
    scope.formula2 = calculateFormula(formula2, scope);
    scope.formula3 = calculateFormula(formula3, scope);

    // Update the results state
    setResults({
      formula1: scope.formula1,
      formula2: scope.formula2,
      formula3: scope.formula3,
    });
  }, [number1, number2, formula1, formula2, formula3]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Formula Calculator</h1>
      {/* Input form component for taking inputs */}
      <InputForm
        number1={number1}
        setNumber1={setNumber1}
        number2={number2}
        setNumber2={setNumber2}
        formula1={formula1}
        setFormula1={setFormula1}
        formula2={formula2}
        setFormula2={setFormula2}
        formula3={formula3}
        setFormula3={setFormula3}
      />
      {/* Results component for displaying outputs */}
      <Results results={results} />
    </div>
  );
};

export default FormulaCalculator;
