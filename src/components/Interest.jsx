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
    <main className="flex flex-col items-center justify-start py-10 px-2">
      <div className="flex items-center justify-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4 mr-4 cursor-pointer"
          onClick={handleBack}
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <div className="w-full md:w-4/5 bg-gray-200 h-1 rounded-lg ">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: `${currentStep * 14.28}%` }}
          ></div>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl text-gray-800 text-center font-bold tracking-tight py-4">
        Which are you most interested in?
      </h2>
      <h3 className="text-md font-medium text-center text-gray-700 py-3">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </h3>
      <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
        <div className="w-full md:w-[42%] py-3 pb-7 px-2 text-md flex gap-4 justify-center flex-col ">
          <Radio value="student">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672067_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-medium">
                Learning specific skills to advance my career
              </p>
            </div>
          </Radio>
          <Radio value="professional">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672072_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-medium">
                Exploring new topics I'm interested in
              </p>
            </div>
          </Radio>
          <Radio value="parent">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672064_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-medium">Refreshing my math foundations</p>
            </div>
          </Radio>
          <Radio value="learner">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672074_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-medium">Exercising my brain to stay sharp</p>
            </div>
          </Radio>
          <Radio value="teacher">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672075_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-medium">Something else</p>
            </div>
          </Radio>
        </div>
      </RadioGroup>

      <button
        onClick={handleContinue}
        className={`flex gap-4 items-center px-12 py-3 rounded-md bg-black text-white font-medium hover:transition-all hover:duration-300 hover:bg-white hover:border hover:border-black hover:text-black`}
      >
        Continue
      </button>
    </main>
  );
};

export default Interest;
