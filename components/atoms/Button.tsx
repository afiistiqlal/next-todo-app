import React from "react";

type Props = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const Button = ({ text, onClick }: Props) => {
  return <button className="bg-sky-400 py-4 px-8 rounded-full hover:bg-sky-500" onClick={onClick}>{text}</button>;
};

export default Button;
