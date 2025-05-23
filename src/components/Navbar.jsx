import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2D0100] text-yellow-200">
      <div className="max-w-7xl mx-auto px-12 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <a href="#home">
                <img
                  src="/logodog.svg"
                  alt="Logo"
                  className="h-20 w-20"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-300 hover:text-[#3b0f0f]"
              >
                HOME
              </a>
              <a
                href="#work"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-300 hover:text-[#3b0f0f]"
              >
                WORK
              </a>
              <a
                href="#find"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-300 hover:text-[#3b0f0f]"
              >
                FIND
              </a>
              <a
                href="#contact"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-300 hover:text-[#3b0f0f]"
              >
                CONTACT
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 "
            >
              <span className="sr-only">Open main menu</span>
              <img
                src="/bonehamburger.svg"
                alt="Menu"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-300 hover:text-[#3b0f0f] text-center"
            >
              Home
            </a>
            <a
              href="#work"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-300 hover:text-[#3b0f0f] text-center"
            >
              Work
            </a>
            <a
              href="#find"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-300 hover:text-[#3b0f0f] text-center"
            >
              Find
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-300 hover:text-[#3b0f0f] text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;