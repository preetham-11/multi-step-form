import React, { useState } from "react";
import Intro from "./components/Intro";
import Interest from "./components/Interest";
import Description from "./components/Description";
import Comfort from "./components/Comfort";
import Review from "./components/Review";
import Loading from "./components/Loading";
import Outro from "./components/Outro";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <Intro currentStep={currentStep} onNextStep={handleNextStep} />
      )}
      {currentStep === 2 && (
        <Interest
          currentStep={currentStep}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {currentStep === 3 && (
        <Description
          currentStep={currentStep}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {currentStep === 4 && (
        <Comfort
          currentStep={currentStep}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {currentStep === 5 && (
        <Review
          currentStep={currentStep}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {currentStep === 6 && (
        <Loading currentStep={currentStep} onNextStep={handleNextStep} />
      )}
      {currentStep === 7 && <Outro currentStep={currentStep} />}
    </div>
  );
};
export default MultiStepForm;
