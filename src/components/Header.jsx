import React from "react";

const Header = () => {
  return (
    <header className="bg-[#2D0100] text-yellow relative h-[90vh]">
      <div className="max-w-7xl mx-auto flex flex-wrap h-full">
        {/* Left Div */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/dog.svg"
            alt="Dog Illustration"
            className="h-4/5 w-auto" // 80% height, auto width
          />
        </div>

        {/* Right Div */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8">
          <h1 className="font-califone text-4xl md:text-5xl font-bold mb-4 ">WOOF WOOF!</h1>
          <h2 className="font-califone text-2xl md:text-3xl font-semibold mb-6 ">We also want a HAPPY ENDING...</h2>
          <p className="text-sm md:text-base text-yellow max-w-lg mb-8">
            We are a non-profit organisation, we connect you with your loving
            rescue stray dogs because they also deserve a happy ending...
          </p>
          <div className="flex space-x-12">
            <a
              href="#find"
              className="relative bg-[#FF9F00] text-[#2D0100] px-6 py-3 rounded-[20.99px] text-sm font-medium border-2 border-yellow shadow-md hover:bg-yellow flex items-center space-x-2 group"
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
              className="relative bg-[#FF9F00] text-[#2D0100] px-6 py-3 rounded-[20.99px] text-sm font-medium border-2 border-yellow shadow-md hover:bg-yellow flex items-center space-x-2 group"
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