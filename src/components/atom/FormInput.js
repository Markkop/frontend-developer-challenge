import React from "react";

const FormInput = ({ type = "", id = "", label = "", handleChange }) => {
  return (
    <div className="inputBox">
      <label htmlFor={id}>{label}</label>
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
