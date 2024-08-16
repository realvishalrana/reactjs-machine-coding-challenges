import React from "react";

const Input = ({
  value,
  label,
  isRequired = true,
  onChange = () => {},
  type = "text",
  labelClassName = "",
  className = "",
  placeholder,
  name,
  format
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
        className={className}
        required={isRequired}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

export default Input;
