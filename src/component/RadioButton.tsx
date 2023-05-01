import React from "react";

const RadioButton = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input
          className="form-check-input me-1"
          type="radio"
          name="listGroupRadio"
          value=""
          id="firstRadio"
          checked
        />
        <label className="form-check-label" htmlFor="firstRadio">
          KMP
        </label>
      </li>
      <li className="list-group-item">
        <input
          className="form-check-input me-1"
          type="radio"
          name="listGroupRadio"
          value=""
          id="secondRadio"
        />
        <label className="form-check-label" htmlFor="secondRadio">
          BM
        </label>
      </li>
    </ul>
  );
};

export default RadioButton;
