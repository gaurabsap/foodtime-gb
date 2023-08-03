import React from "react";
import { BsArrowRight } from "react-icons/bs";
import exp from "../assets/exp.png";
const Explore = () => {
  return (
    <div className="bg-white p-10 mt-36 lg:mt-10">
      <div className="flex max-w-6xl mx-auto p-2 flex-1 lg:flex-row flex-col">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <span className="lg:text-5xl text-4xl text-blue-500">
              Explore your
            </span>
            <span className="lg:text-5xl text-4xl text-blue-500">
              Favourite city's food.
            </span>
          </div>
          <p className="lg:w-[65%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            doloribus quod neque quibusdam omnis. Sed, delectus at? Sint, totam
            enim.
          </p>
          <div>
            <button className="flex items-center gap-3 px-5 py-3 bg-blue-500 text-white rounded-full">
              Explore <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="">
          <img className="w-full" src={exp} alt="exp" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
