import React from "react";

type Props = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled }: Props) => {
  return (
    <button
      className={`bg-sky-400 py-2.5 px-8 rounded-full hover:bg-sky-500 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
