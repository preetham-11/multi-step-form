import React, { useState } from "react";
import Radio, { RadioGroup } from "./Radio";

const Interest = ({ currentStep, onNextStep, onPrevStep }) => {
  const [plan, setPlan] = useState("");

  const handleContinue = () => {
    onNextStep();
  };

  const handleBack = () => {
    onPrevStep();
  };
  return (
    <main className="h-screen flex flex-col items-center justify-center py-10 px-2">
      <h2 className="text-xl md:text-4xl text-gray-800 font-bold tracking-tight py-4">
        Learning paths based on your answers
      </h2>
      <h3 className="md:text-lg text-sm font-medium text-gray-700 py-3">
        Choose one to get started. You can switch anytime.
      </h3>
      <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
        <div className="w-full md:w-[42%] py-3 pb-7 px-2 text-md flex gap-4 justify-center flex-col md:flex-row ">
          <Radio value="student">
            <div className="flex-col md:flex-row flex items-center justify-center gap-4 md:w-96">
              <div>
                <p className="font-medium text-sm md:text-lg">
                  Foundational Math
                </p>
                <p className="font-normal text-sm md:text-lg ">
                  Build your foundational skills in algebra, geometry, and
                  probability.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdGhzfGVufDB8fDB8fHww"
                className="w-[100px] rounded-lg"
              />
            </div>
          </Radio>
          <Radio value="professional">
            <div className="flex-col flex md:flex-row  items-center justify-center gap-4 md:w-96">
              <div>
                <p className="font-medium text-sm md:text-lg">
                  Mathematical Thinking
                </p>
                <p className="font-normal text-sm md:text-lg ">
                  Build your foundational skills in algebra, geometry, and
                  probability.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdGhzfGVufDB8fDB8fHww"
                className="w-[100px] rounded-lg"
              />
            </div>
          </Radio>
        </div>
      </RadioGroup>
    </main>
  );
};

export default Interest;
