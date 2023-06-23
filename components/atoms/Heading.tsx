import React from "react";

type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return <h1 className="font-bold uppercase text-3xl">{text}</h1>;
};

export default Heading;
