import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <div className="formWrapper">{title}</div>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto,480px)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
