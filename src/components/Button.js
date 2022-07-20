import React from "react";

const Button = ({ text, type, fullWidth }) => {
  return (
    <button
      className={`${
        type === 1 ? "bg-violet text-white" : "bg-veryLightViolet text-violet dark:bg-[#303642] dark:text-white"
      } ${fullWidth ? 'w-full': ''} capitalize px-5 py-4 rounded-md font-bold hover:opacity-70`}
    >
      {text}
    </button>
  );
};

export default Button;
