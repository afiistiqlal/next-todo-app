import React from "react";
import Image from "next/image";
import emptyState from "@/public/activity-empty-state.png";

type Props = {};

const EmptyActivity = (props: Props) => {
  return (
    <div className="w-2/4 h-auto my-10 p-4 mx-auto">
      <Image src={emptyState} alt="" />
    </div>
  );
};

export default EmptyActivity;
