import React, { useState } from "react";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo.png";
const Nav = () => {
  const [menu, setMenu] = useState(false);
  const HandleShowMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex items-center justify-between p-3 lg:justify-around border-b-2">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div
        className={
          menu
            ? "z-30 absolute flex flex-col top-0 left-0 justify-center w-full bg-gray-900 h-full transition-all duration-150"
            : "hidden md:flex items-center gap-10 transition-all duration-150"
        }
      >
        <div
          className={
            menu
              ? "flex flex-col items-center gap-10"
              : "md:flex items-center gap-10"
          }
        >
          <a
            className="p-2 text-white md:text-black lg:text-[17px] text-[17px]"
            href="/"
          >
            Home
          </a>
          <a
            className="p-2 text-white md:text-black lg:text-[17px] text-[17px]"
            href="/"
          >
            Blog
          </a>
          <a
            className="p-2 text-white md:text-black lg:text-[17px] text-[15px]"
            href="/"
          >
            About us
          </a>
          <a
            className="flex items-center gap-1 p-2 text-white md:text-black lg:text-[15px] text-[18px]"
            href="/"
          >
            En <AiOutlineDown />
          </a>
        </div>
        <div
          className={
            menu
              ? "flex flex-col items-center gap-10 mt-10"
              : "flex items-center gap-5"
          }
        >
          <button className="cursor-pointer px-8 py-2 border bg-blue-500 text-white rounded-full">
            Login
          </button>
          <div className="cursor-pointer p-2 rounded-full flex items-center justify-center bg-blue-500 relative">
            <AiOutlineShoppingCart className="text-white text-2xl" />
            <p className="absolute top-[-12px] right-[-10px] px-2 bg-red-600 text-white rounded-full">
              2
            </p>
          </div>
        </div>
      </div>
      <div
        className="md:hidden flex z-40 cursor-pointer"
        onClick={HandleShowMenu}
      >
        {menu ? (
          <RxCross1 className="text-2xl text-white" />
        ) : (
          <GrMenu className="text-2xl" />
        )}
        {/* <GrMenu className="text-2xl" /> */}
      </div>
    </div>
  );
};

export default Nav;
