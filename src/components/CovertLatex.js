import React, { useState } from "react";
import MathJax from "react-mathjax";
import userData from "../data";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ConvertLatex = ({ user }) => {
  const [inputValue, setInputValue] = useState(
    "\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta"
  );
  const [formula, setformula] = useState(userData.formulae);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formula.includes(inputValue.trim())) {
      setformula([...formula, inputValue]);
    }
    //   setformula([...formula, { latex: inputValue, actual: "" }]);
    //     const actualFormula = document.getElementById(
    //       "MathJax-Element-1-Frame"
    //     ).innerText;
    //     console.log(actualFormula);
    //     setformula([...formula, { latex: inputValue, actual: actualFormula }]);
  };
  return (
    <>
      <div className="px-5">
        <h2 className="my-4  text-info">
          Convert Latex formula to Actual formula
        </h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Latex Formula:</Form.Label>
            <Form.Control
              type="text"
              required
              name="latexFormula"
              defaultValue={inputValue}
              autoComplete="off"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </Form.Group>
          <MathJax.Provider>
            <div className="my-3">
              <p>Actual Formula:</p>
              <MathJax.Node inline formula={inputValue} />
            </div>
          </MathJax.Provider>
          <div className="mb-3">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
        <div className="pb-3">
          <h3 className="text-info my-4">Your Formulae:</h3>
          {formula.map((f, index) => {
            return (
              <li className="p-2 my-2" key={index}>
                <strong>Latex Formula: </strong>
                {f}
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ConvertLatex;
