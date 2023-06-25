import Layout from "@/components/templates/Layout";
import React, { ChangeEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import Heading from "@/components/atoms/Heading";
import { BsPencil } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Button from "@/components/atoms/Button";
import Header from "@/components/templates/Header";
import EmptyList from "@/components/molecules/EmptyList";
import ListCard from "@/components/molecules/ListCard";
import NewListModal from "@/components/organisms/NewListModal";
import Link from "next/link";

interface List {
  id: number;
  title: string;
  finished: boolean;
}

type Props = {};

const Activity = (props: Props) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const [newTitle, setNewTitle] = useState(title);
  const [lists, setNewList] = useState<List[]>([]);
  const [modal, setModal] = useState(false);

  const addList = (listName: string, priority: string) => {
    const newList = {
      id: lists.length + 1,
      title: listName,
      finished: false,
      priority: priority,
    };
    console.log(newList);
    setNewList((prevLists) => [...prevLists, newList]);
    setModal(false);
  };
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };
  const taskFinished = (id: number) => {
    setNewList((prevLists) =>
      prevLists.map((value) => {
        if (value.id === id) {
          return { ...value, finished: !value.finished };
        }
        return value;
      })
    );
  };
  const deleteTask = (id: number) => {
    setNewList((prevLists) => prevLists.filter((value) => value.id !== id));
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <Layout>
      {modal && <NewListModal closeModal={closeModal} saveList={addList} />}
      <Header>
        <div className="flex items-center gap-2 w-full">
          <Link href={"/"}>
            <IoIosArrowBack className="text-3xl font-bold" />{" "}
          </Link>
          <Heading>
            <div className="flex items-center w-full">
              <input
                name="activity"
                type="text"
                value={newTitle ?? ""}
                onChange={handleTitleChange}
                className="focus:outline-none bg-transparent w-full flex-grow"
              />
              <BsPencil className="text-base text-gray-500" />
            </div>
          </Heading>
        </div>
        <Button text="Tambah" onClick={() => setModal(true)} />
      </Header>
      <div className="py-8">
        {lists.length === 0 ? (
          <EmptyList />
        ) : (
          <ul>
            {lists.map((list) => (
              <ListCard
                key={list.id}
                text={list.title}
                finished={list.finished}
                finishTask={() => taskFinished(list.id)}
                deleteTask={() => deleteTask(list.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Activity;
