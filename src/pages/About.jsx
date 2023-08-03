import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
const About = () => {
  return (
    <div className="p-5 flex lg:flex-row flex-col items-center justify-evenly">
      <div className="flex py-8 px-5 flex-col items-start p-2 gap-3 lg:w-[20%] w-full bg-gray-300 rounded-xl">
        <img className="w-[20%]" src={f1} alt="f1" />
        <h1 className="font-bold text-blue-700 text-2xl">
          Wide selection of restaurants
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, eum.
        </p>
      </div>
      <div className="flex py-8 px-5 flex-col items-start p-2 gap-3 lg:w-[20%] w-full rounded-xl">
        <img className="w-[20%]" src={f2} alt="f1" />
        <h1 className="font-bold text-blue-700 text-2xl">
          Easy odering process
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, eum.
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="flex py-8 px-5 flex-col items-start p-2 gap-3 lg:w-[20%] w-full rounded-xl">
        <img className="w-[20%]" src={f3} alt="f1" />
        <h1 className="font-bold text-blue-700 text-2xl">
          Fast delivery within 20 minute
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, eum.
          lorem Lorem, ipsum dolor.
        </p>
      </div>
    </div>
  );
};

export default About;
