import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="border-2 border-black rounded mx-2 gap-4 text-2xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
