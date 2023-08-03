import React, { useState } from "react";
// import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Card from "./Card";
const Testo = () => {
  const [show, setShow] = useState(false);
  const Handletest1 = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-1 flex-col gap-10">
        <h1 className="text-4xl font-semibold text-center">
          Frequently asked questions
        </h1>
        <div className="text-center flex gap-2 items-center justify-center">
          <button className="px-8 py-2 bg-blue-500 text-white rounded-full">
            General
          </button>
          <button className="py-2 border border-black rounded-full px-5">
            For business
          </button>
        </div>
      </div>
      <div className="m-10 flex flex-col lg:flex-row justify-center p-3 gap-5">
        <div className="flex w-[50%] flex-col gap-5">
          <Card title={"What do i need to apply for the account?"} />
          <Card title={"How the subscription process works?"} />
          <Card title={"What do i need to apply for the account?"} />
        </div>
        <div className="flex w-[50%] flex-col gap-5">
          <Card title={"What do i need to apply for the account?"} />
          <Card title={"Is foodtime available 24 hours?"} />
          <Card title={"Is there any hidden fee included?"} />
        </div>
      </div>
    </div>
  );
};

export default Testo;
