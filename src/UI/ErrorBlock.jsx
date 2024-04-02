import React from "react";

const ErrorBlock = ({ title, message }) => {
  return (
    <div className=" mx-auto my-12 w-fit rounded-lg bg-rose-200  px-12 py-10 text-center">
      <h1 className="text-xl font-bold text-rose-900">{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBlock;
