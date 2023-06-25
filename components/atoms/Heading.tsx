import React, {ReactNode} from "react";

type Props = {
  children: ReactNode
};

const Heading = ({ children }: Props) => {
  return <h1 className="font-bold uppercase text-3xl">{children}</h1>;
};

export default Heading;
