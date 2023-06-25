import React from "react";
import Image from "next/image";
import emptyListState from "@/public/todo-empty-state.png";

type Props = {};

const EmptyList = (props: Props) => {
  return (
    <div className="w-1/3 h-auto my-10 p-4 mx-auto">
      <Image src={emptyListState} alt="" priority/>
    </div>
  );
};

export default EmptyList;
