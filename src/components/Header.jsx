import React from "react";

const Header = () => {
  return (
    <header className="bg-[#2D0100] text-yellow-200 relative h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-screen px-4">
        {/* Left Div */}
        <div className="w-full px-10 md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img
            src="/dog.svg"
            alt="Dog Illustration"
            className="h-40 w-auto md:h-3/4"
          />
        </div>

        {/* Right Div */}
        <div className="w-full px-10 md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="font-califone text-3xl md:text-5xl mb-4 font-semibold">
            WOOF WOOF !
          </h1>
          <h2 className="font-califone text-xl md:text-3xl mb-6">
            We also want a HAPPY ENDING...
          </h2>
          <p className="text-sm md:sm max-w-lg mb-8">
            We are a non-profit organisation, we connect you with your loving
            rescue stray dogs because they also deserve a happy ending...
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#find"
              className="relative bg-[#FF9F00] text-[#2D0100] px-6 py-3 rounded-full text-sm font-medium border-2 border-yellow shadow-md hover:bg-yellow flex items-center justify-center space-x-2 group"
            >
              <span>Find dogs</span>
              <img src="pets.svg" alt="Paw Icon" className="h-5 w-5" />
              <img
                src="Vector.svg"
                alt="Arrow Icon"
                className="absolute top-[-10px] right-[-14px] h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-y-2 group-hover:translate-x-2"
              />
            </a>
            <a
              href="#work"
              className="relative bg-[#FF9F00] text-[#2D0100] px-6 py-3 rounded-full text-sm font-medium border-2 border-yellow shadow-md hover:bg-yellow flex items-center justify-center space-x-2 group"
            >
              <span>What we do</span>
              <img src="pets.svg" alt="Paw Icon" className="h-5 w-5" />
              <img
                src="Vector.svg"
                alt="Arrow Icon"
                className="absolute top-[-10px] right-[-14px] h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-y-2 group-hover:translate-x-2"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;