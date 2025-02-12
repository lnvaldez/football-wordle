import React from "react";

const Button = ({ onClick, children, color }) => {
  const colorClasses = {
    easy: "bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500",
    medium:
      "bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500",
    hard: "bg-red-500 hover:bg-red-400 border-red-700 hover:border-red-500",
  };

  const selectedColor = colorClasses[color] || colorClasses.easy;

  return (
    <button
      className={`text-white font-bold py-2 px-4 border-b-4 text-3xl rounded ${selectedColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
