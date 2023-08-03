import React from "react";
import google from "../assets/google.png";
import app from "../assets/app.png";
import last from "../assets/last.png";
const Pocket = () => {
  return (
    <div className="border border-black flex lg:flex-row flex-col gap-5 lg:gap-0 items-center justify-center max-w-6xl mx-auto p-3">
      <div className="flex flex-col flex-1 gap-5 items-center lg:items-start">
        <h1 className="font-semibold text-blue-500 text-3xl lg:text-5xl">
          Put us in your pocket
        </h1>
        <p className="lg:w-[50%]">
          Download our app from google play or app store and you don’t have to
          be worry about your food anymore.{" "}
        </p>
        <div className="flex items-center gap-5 justify-center lg:justify-start">
          <img className="w-[20%]" src={google} alt="google" />
          <img className="w-[20%]" src={app} alt="app" />
        </div>
      </div>
      <div className="flex-1">
        <img className="w-[100%]" src={last} alt="last" />
      </div>
    </div>
  );
};

export default Pocket;
