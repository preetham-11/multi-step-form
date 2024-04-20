import React, { useState } from "react";
import Radio, { RadioGroup } from "./Radio";

const Intro = ({ currentStep, onNextStep }) => {
  const [plan, setPlan] = useState("");

  const handleContinue = () => {
    onNextStep();
  };
  return (
    <main className="flex flex-col items-center justify-start py-10 px-2">
      <div className="w-full md:w-4/5 bg-gray-200 h-1 rounded-lg ">
        <div
          className="bg-green-500 h-full rounded-full"
          style={{ width: `${currentStep * 14.28}%` }}
        ></div>
      </div>
      <h2 className="text-2xl md:text-3xl text-gray-800 font-bold tracking-tight py-2">
        Which describes you best?
      </h2>
      <h3 className="text-md font-medium text-gray-700 py-2">
        This will help us personalize your experience.
      </h3>
      <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
        <div className="w-full md:w-[42%] py-3 pb-7 px-2 text-md flex gap-4 justify-center flex-col ">
          <Radio value="student">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672067_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p>
                <span className="font-medium">Student</span> or soon to be
                enrolled
              </p>
            </div>
          </Radio>
          <Radio value="professional">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672072_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p>
                <span className="font-medium">Professional</span> pursuing a
                career
              </p>
            </div>
          </Radio>
          <Radio value="parent">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672064_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p>
                <span className="font-medium">Parent</span> of a school-age
                child
              </p>
            </div>
          </Radio>
          <Radio value="learner">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672074_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-medium">Lifelong learner</p>
            </div>
          </Radio>
          <Radio value="teacher">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672075_640.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-medium">Teacher</p>
            </div>
          </Radio>
          <Radio value="other">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/03/05/11/ai-generated-8672066_1280.jpg"
                className="h-10 w-10 rounded-lg"
              />
              <p className="font-medium">Other</p>
            </div>
          </Radio>
        </div>
      </RadioGroup>
      <button
        onClick={handleContinue}
        className={`flex gap-4 items-center px-12 py-3 rounded-md bg-black text-white font-medium hover:bg-white hover:transition-all hover:duration-300 hover:border hover:border-black hover:text-black`}
      >
        Continue
      </button>
    </main>
  );
};

export default Intro;
