import React from "react";

const Description = ({ currentStep, onNextStep, onPrevStep }) => {
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
      <div className=" mx-auto grid md:grid-cols-2 w-4/5 md:gap-10 py-8">
        <img
          src="https://cdn.pixabay.com/photo/2019/11/19/13/40/vector-4637455_1280.jpg"
          className="w-[300px] sm:w-[500px] md:w-[300px] my-8  mx-auto rounded-lg "
        />
        <div className="flex flex-col px-6 md:px-2 justify-center items-center md:items-start">
          <p className="text-2xl py-5 md:leading-tight font-bold text-black md:text-3xl text-center md:text-left ">
            You are in the right place
          </p>
          <p className="text-md text-black font-medium md:text-lg text-center md:text-left">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>
      <button
        onClick={handleContinue}
        className={`flex gap-4 items-center px-12 py-3 rounded-md bg-black hover:transition-all hover:duration-300 text-white font-medium hover:bg-white hover:border hover:border-black hover:text-black`}
      >
        Continue
      </button>
    </main>
  );
};
export default Description;
