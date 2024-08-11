import { useState } from "react";

const useMultiForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    setCurrentStepIndex,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiForm;
