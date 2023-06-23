import React from "react";
import Title from "../atoms/Title";

type Props = {
  title: string;
  date: string;
};

const ActivityCard = ({ title, date }: Props) => {
  return (
    <div className="aspect-square rounded-xl shadow-xl p-6 bg-white hover:scale-105 hover:cursor-pointer ease-in-out duration-150">
      <div className="flex flex-col h-full justify-between">
        <Title text={title} />
        <div className="flex gap-4 justify-between">
          <p className="">{date}</p>
          <button className="">🥡</button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
