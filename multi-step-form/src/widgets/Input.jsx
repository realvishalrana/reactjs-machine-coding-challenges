import React from "react";

const Input = ({
  value,
  label,
  isRequired = true,
  onChange = () => {},
  type = "text",
  labelClassName = "",
  autoFocus
}) => {
  return (
    <>
      {label && (
        <label className={labelClassName}>
          {label}
          {isRequired && <span> *</span>}
        </label>
      )}
      <input
        autoFocus={autoFocus}
        required={isRequired}
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
