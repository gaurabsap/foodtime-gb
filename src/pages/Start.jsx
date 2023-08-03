import React from "react";
import cook from "../assets/cook.png";
import { BsArrowRight } from "react-icons/bs";

const Start = () => {
  return (
    <div className="p-5 border border-black">
      <div className="flex items-center justify-center relative">
        <img className="w-[80%]" src={cook} alt="cooking" />
        <div className="flex flex-col gap-5 items-center absolute md:bottom-10 bottom-2 p-2">
          <h1 className="text-white text-[14px] md:text-3xl">
            Want to be a part of Foodtime?
          </h1>
          <p className="text-white text-[10px] md:text-[16px]">
            List your restaurant or shop on foodtime
          </p>
          <button className="flex items-center gap-3 py-2 md:py-3 md:px-10 px-3 bg-orange-500 text-white rounded-full">
            Get started <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
