import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export default Header;
