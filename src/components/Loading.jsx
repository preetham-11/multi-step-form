import React, { useState, useEffect } from "react";

const Loading = ({ onNextStep }) => {
  const [showImg, setShowImg] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowImg(false);
    }, 2000);
  }, []);

  const handleContinue = () => {
    onNextStep();
  };

  return (
    <div className="flex h-screen flex-col justify-center items-center px-5">
      <div className="py-10">
        <p className="md:text-2xl text-lg font-bold text-center">
          Finding learning path recommendations for you based on your responses.
        </p>
      </div>
      <div>
        {showImg ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="animate-spin h-12 w-12 text-black"
            >
              <path
                fill="currentColor"
                d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
              />
            </svg>
          </div>
        ) : (
          <button
            onClick={handleContinue}
            className={`flex gap-4 items-center px-12 py-3 rounded-md bg-black text-white font-medium hover:bg-white hover:border hover:border-black hover:text-black`}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Loading;
