import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Card = ({ title }) => {
  const [show, setShow] = useState(false);
  const Handletest1 = () => {
    setShow(!show);
  };
  return (
    <div className="w-[70vw] lg:w-auto">
      <div className="border border-gray-700 w-full lg:w-[90%] py-5 px-5 flex flex-col gap-4 rounded-md">
        <div className="flex item-center justify-between w-full">
          <h1 className="font-semibold text-[14px] lg:text-[18px]">{title}</h1>
          <div onClick={Handletest1}>
            {show ? (
              <AiOutlineMinusCircle size={30} className="cursor-pointer" />
            ) : (
              <AiOutlinePlusCircle className="cursor-pointer" size={30} />
            )}
          </div>
        </div>

        {show ? (
          <div className="w-full flex flex-col gap-4">
            <p className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quasi, perspiciatis!
            </p>
            <p className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              nesciunt.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
