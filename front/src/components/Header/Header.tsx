"use client";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[10vh] border-black border-b-2 flex flex-row items-center justify-between px-3">
      <img src="" className="border border-black h-[8vh] w-[8vh]" alt="" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none z-10 transition-all duration-300"
      >
        <label>
          <div
            className={`w-9 h-14 cursor-pointer flex flex-col items-center ${
              isOpen ? "justify-evenly  space-y-0" : "justify-center space-y-1"
            }`}
          >
            <div
              className={` ${
                isOpen && "w-[80%] rotate-[45deg] "
              } w-[75%] h-[3px] bg-black rounded-md transition-all
                   duration-400 origin-left`}
            ></div>
            <div
              className={`w-[75%] h-[3px] bg-black rounded-md transition-all duration-400 origin-center ${
                isOpen && "hidden"
              }`}
            ></div>
            <div
              className={`${isOpen && "w-[80%] rotate-[-45deg] "}
                  w-[75%] h-[3px] bg-black rounded-md transition-all duration-400 origin-left 
                  `}
            ></div>
          </div>
        </label>
      </button>
    </header>
  );
};

export default Header;
