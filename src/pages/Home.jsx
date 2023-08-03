import React from "react";
import vector from "../assets/vector.png";
import ecp from "../assets/ecp.png";
import landing from "../assets/landing.png";
import leave from "../assets/leaves2.png";
import leaves from "../assets/leave.png";
import tick from "../assets/tick.png";
import { BiSearch } from "react-icons/bi";
const Home = () => {
  return (
    <div className="border relative lg:max-w-6xl lg:mx-auto md:flex-row gap-16 flex md:h-[85vh] items-center justify-center p-3 flex-col">
      <div className="flex flex-col justify-center items-center gap-10 md:flex-1">
        <div className="flex flex-col justify-center gap-5">
          <span className="lg:text-5xl md:text-4xl text-3xl cursive  md:text-start">
            Order food online
          </span>
          <span className="lg:text-5xl md:text-4xl text-3xl cursive  md:text-start">
            From your favourite
          </span>
          <span className="lg:text-5xl md:text-4xl text-3xl cursive md:text-start">
            Local restaurants<span className="text-orange-500">.</span>
          </span>
        </div>
        <p className="text-center md:text-start">
          Freshly made food delivered to your door.
        </p>
        <div className="mx-auto w-[70%] lg:w-auto lg:m-0">
          <div className="w-fit lg:w-full flex border-2 p-1 rounded-full items-center justify-between relative">
            <div className="flex items-center justify-center  gap-5">
              <div className="lg:relative md:flex hidden">
                <img src={ecp} alt="ecp" />
                <img
                  className="absolute right-[9px] top-2"
                  src={vector}
                  alt="vector"
                />
              </div>
              <input
                className=" p-1 outline-0 lg:text-[17px] text-[14px] bg-transparent"
                type="text"
                placeholder="Enter your location"
              />
            </div>
            <button className="flex items-center lg:px-3 lg:py-3 p-1 h-full rounded-full gap-2 bg-blue-600 text-white">
              <BiSearch />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 relative">
        <img
          className="absolute top-[-14%] right-[15%] w-[35%]"
          src={leave}
          alt="leave"
        />
        <img
          className="lg:w-[90%] w-[95%] md:w-[100%] z-10"
          src={landing}
          alt="landing"
        />
        <div className="flex flex-col items-center px-8 py-1  rounded-md deliver border h-fit absolute top-[-30px] right-[35%] z-20 gap-1">
          <div className="flex items-center gap-2">
            <img className="w-[40%]" src={tick} alt="tick" />
            <p className="text-orange-400 text-2xl font-bold">200k+</p>
          </div>
          <p className="text-[14px]">People Delivered</p>
        </div>
      </div>
      <img
        className="absolute top-[-4%] left-[-12%] w-[12%]"
        src={leaves}
        alt="leaves"
      />
    </div>
  );
};

export default Home;
