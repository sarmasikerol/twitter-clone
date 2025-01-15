import React from "react";
import {
  FaRegComments,
  FaRetweet,
  FaRegHeart,
  FaShareNodes,
} from "react-icons/fa6";

const Buttons = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-blue-400/40">
        <FaRegComments />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition hover:bg-blue-400/40">
        <FaRetweet />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition hover:bg-blue-400/40">
        <FaRegHeart />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition hover:bg-blue-400/40">
        <FaShareNodes />
      </div>
    </div>
  );
};

export default Buttons;
