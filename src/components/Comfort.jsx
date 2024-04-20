import React, { useState } from "react";
import Radio, { RadioGroup } from "./Radio";

const Comfort = ({ currentStep, onNextStep, onPrevStep }) => {
  const [plan, setPlan] = useState("");

  const handleContinue = () => {
    onNextStep();
  };

  const handleBack = () => {
    onPrevStep();
  };
  return (
    <main className="flex flex-col items-center justify-start py-10 px-2">
      <div className="flex items-center justify-center w-full pb-10">
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
      <h2 className="text-2xl md:text-3xl text-gray-800 font-bold tracking-tight py-4">
        What is your math comfort level?
      </h2>
      <h3 className="text-md font-medium text-gray-700 py-3">
        Choose the highest level you feel confident in - you can always adjust
        later.
      </h3>
      <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
        <div className="w-full md:w-[42%] md:py-16 py-3 pb-7 px-2 text-md flex gap-4 justify-center flex-col md:flex-row">
          <Radio value="student">
            <div className="flex flex-col justify-center md:w-60 items-center gap-4">
              <p className="font-normal text-lg">5 x 1/2 = ?</p>
              <p className="font-semibold text-md">Arithmetic</p>
              <p className="font-normal text-zinc-400 text-lg">Introductory</p>
            </div>
          </Radio>
          <Radio value="new">
            <div className="flex flex-col justify-center md:w-60 items-center gap-4">
              <p className="font-normal text-lg">3𝑥+5=4</p>
              <p className="font-semibold text-md">Basic Algebra</p>
              <p className="font-normal text-zinc-400 text-lg">Foundational</p>
            </div>
          </Radio>
          <Radio value="foundations">
            <div className="flex flex-col justify-center md:w-60 items-center gap-4">
              <p className="font-normal text-lg">
                𝑥 = (-b ± √(b^2 - 4ac))/(2a)
              </p>
              <p className="font-semibold text-md">Intermediate Algebra</p>
              <p className="font-normal text-zinc-400 text-lg">Intermediate</p>
            </div>
          </Radio>
          <Radio value="exercise">
            <div className="flex flex-col justify-center md:w-60 items-center gap-4">
              <p className="font-normal text-lg">∫₀⁷𝑥²𝑑𝑥=?</p>
              <p className="font-semibold text-md">Calculus </p>
              <p className="font-normal text-zinc-400 text-lg">Advanced</p>
            </div>
          </Radio>
        </div>
      </RadioGroup>

      <button
        onClick={handleContinue}
        className={`flex gap-4 items-center px-12 py-3 rounded-md hover:transition-all hover:duration-300 bg-black text-white font-medium hover:bg-white hover:border hover:border-black hover:text-black`}
      >
        Continue
      </button>
    </main>
  );
};

export default Comfort;
