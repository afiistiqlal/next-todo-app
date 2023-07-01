import React from "react";
import Title from "../atoms/Title";
import { BsTrash } from "react-icons/bs";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  deleteCard: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ActivityCard = ({ id, title, createdAt, deleteCard }: Props) => {
  const inputDate = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // const formatter = new Intl.DateTimeFormat("en-US", options);
  // const formattedDate = formatter.format(inputDate);

  return (
    <div className="aspect-square rounded-xl shadow-xl bg-white hover:scale-105 hover:cursor-pointer ease-in-out duration-150 overflow-hidden">
      <div className="flex flex-col h-full p-6">
        <Link href={`/activity/${id}?title=${title}`} className="h-full">
          <Title text={title} />
        </Link>
        <div className="flex gap-4 justify-between items-center">
          <p className="">{createdAt}</p>
          <button
            className="rounded-full hover:bg-sky-100 p-1.5"
            onClick={deleteCard}
          >
            <BsTrash className="text-xl hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
