import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center footer text-white px-10 py-10">
      <div className="flex items-center flex-col lg:flex-row justify-around">
        <div className="flex flex-col p-3 lg:w-[30%] gap-5">
          <img className="w-[50%]" src={logo} alt="logo" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            magni doloribus corporis, dicta reiciendis aut quisquam, adipisci
            quidem voluptas eaque amet illo aliquid tempora accusamus ipsam
          </p>
        </div>
        <div className="flex items-start lg:gap-20 gap-10 mt-10 lg:mt-0 px-5">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Quick links</h1>
            <div className="flex flex-col gap-5">
              <a href="#">Browse Foodtime</a>
              <a href="#">Browse Food tim</a>
              <a href="#">Registration</a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">About</h1>
            <div className="flex flex-col gap-5">
              <a href="#">About us</a>
              <a href="#">Mission</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Social</h1>
            <div className="flex flex-col gap-5">
              <a href="#">Facebook</a>
              <a href="#">Twiter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div>&copy; copyright 2023 Gaurab sapkota</div>
    </div>
  );
};

export default Footer;
