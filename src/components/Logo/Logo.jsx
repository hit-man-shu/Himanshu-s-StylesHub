import React from "react";
import { FaOpencart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
    >
      <FaOpencart className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white" />
      <span className="ml-3 text-xl">Himanshu's StylesHub</span>
    </Link>
  );
};

export default Logo;
