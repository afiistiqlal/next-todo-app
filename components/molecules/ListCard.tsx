import React from "react";
import { BsCheckSquare, BsSquare, BsTrash } from "react-icons/bs";

type Props = {
  text: string;
  finished: boolean;
  finishTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ListCard = ({ text, finished, finishTask, deleteTask }: Props) => {
  return (
    <li className="flex items-center w-full h-14 border shadow-md bg-white p-4 rounded-lg hover:shadow-xl duration-150 ease-in mb-4">
      <div className="flex items-center w-full gap-8">
        <button onClick={finishTask}>
          {finished ? <BsCheckSquare /> : <BsSquare />}
        </button>
        <h4 className="">{text}</h4>
      </div>
      <button onClick={deleteTask}>
        <BsTrash className="" />
      </button>
    </li>
  );
};

export default ListCard;
