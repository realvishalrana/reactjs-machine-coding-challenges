import React, { useState } from "react";
import useMultiForm from "../hooks/useMultiForm";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    step,
    currentStepIndex,
    steps,
    next,
    back,
    isFirstStep,
    isLastStep,
    setCurrentStepIndex,
  } = useMultiForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    alert("Successful Account Creation");
    setData(INITIAL_DATA);
    setCurrentStepIndex(0);
  };

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px soild red",
        padding: "2rem",
        margin: "2rem",
        borderRadius: ".5rem",
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: "absolute",
            right: "10px",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        {!isFirstStep && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}
        <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
      </form>
    </div>
  );
};

export default MultiStepForm;
