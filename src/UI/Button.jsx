import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <>
      <button
        className="select-none rounded bg-[#ffc404] px-5 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-stone-900/10 transition-all hover:shadow-lg hover:shadow-stone-950/20 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
