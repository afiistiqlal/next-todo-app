import React, { useState } from "react";
import Title from "../atoms/Title";
import { BsX } from "react-icons/bs";
import Button from "../atoms/Button";

type Props = {
  closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  saveList: (listName: string, priority: string) => void;
};

const NewListModal = ({ closeModal, saveList }: Props) => {
  const [listName, setListName] = useState("");
  const [priority, setPriority] = useState("");
  const submitList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveList(listName, priority);
  };

  return (
    <aside className="shadow-2xl rounded-2xl w-1/2 fixed flex items-center justify-center z-10 top-[25%] left-[25%]">
      <form className="bg-white rounded-lg w-full" onSubmit={submitList}>
        <header className="flex justify-between items-center py-2 px-4">
          <Title text="Tambah List" />
          <button onClick={closeModal}>
            <BsX className="text-gray-500 text-2xl" />
          </button>
        </header>
        <hr />
        <div className="px-4 py-2">
          <label
            htmlFor="listName"
            className="font-semibold text-sm py-2 uppercase"
          >
            Nama List Item
          </label>
          <input
            type="text"
            name="listName"
            id="listName"
            placeholder="Tambahkan nama list item"
            className="border w-full rounded-md py-2 px-2"
            onChange={(e) => setListName(e.target.value)}
            required
          />

          <div className="my-2">
            <h4 className="font-semibold text-sm py-2 uppercase">Priority</h4>
            <select
              name="priority"
              id="priority"
              className="border text-sm p-2 rounded-lg w-44"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="" disabled>
                Pilih Priority
              </option>
              <option value="1">Very High</option>
              <option value="2">High</option>
              <option value="3">Medium</option>
              <option value="4">Low</option>
              <option value="5">Very Low</option>
            </select>
          </div>
        </div>
        <hr />
        <footer className="w-full flex items-center justify-end py-2 pr-4">
          <Button
            onClick={() => saveList(listName, priority)}
            text="Simpan"
            disabled={!listName}
          />
        </footer>
      </form>
    </aside>
  );
};

export default NewListModal;
