import React from "react";

const Button = ({ children, intent }) => {
  return (
    <button
      className={`p-2 w-[120px] cursor-pointer rounded  hadow-sm text-white  ${intent}`}
    >
      {children}
    </button>
  );
};

export default Button;
