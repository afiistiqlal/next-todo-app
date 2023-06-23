import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ActivityGrid = ({ children }: Props) => {
  return <div className="grid grid-cols-4 gap-6">{children}</div>;
};

export default ActivityGrid;
