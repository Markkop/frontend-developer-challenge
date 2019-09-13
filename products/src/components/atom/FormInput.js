import React from "react";

const FormInput = ({ type = "", id = "", handleChange }) => {
  return (
    <div className="inputBox">
      <label htmlFor={id}>Nome do amigo:</label>
      <input
        className="inputField"
        type={type}
        id={id}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormInput;
