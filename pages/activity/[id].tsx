import Layout from "@/components/templates/Layout";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
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
  activityId: string | null;
  title: string;
  finished: boolean;
}
interface Activity {
  id: number;
  title: string;
  date: string;
}

type Props = {};

const Activity = (props: Props) => {
  const searchParams = useSearchParams();
  const activityId = searchParams.get("id");
  const title = searchParams.get("title");

  const [newTitle, setNewTitle] = useState(title);
  const [lists, setNewList] = useState<List[]>([]);
  const [modal, setModal] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);

  const addList = (listName: string, priority: string) => {
    const newList = {
      id: lists.length + 1,
      activityId: activityId,
      title: listName,
      finished: false,
      priority: priority,
    };
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

  useEffect(() => {
    const savedActivities = localStorage.getItem("activities");
    const savedLists = localStorage.getItem("lists");

    if (savedActivities) {
      const parsedActivities = JSON.parse(savedActivities);
      setActivities(
        parsedActivities.map((activity: any) => {
          if (activity.id.toString() === activityId) {
            return { ...activity, title: newTitle };
          }
          return activity;
        })
      );
    }

    if (savedLists) {
      const parsedLists = JSON.parse(savedLists);
      setActivities(
        parsedLists.map((list: any) => {
          if (list.activityId.toString() === activityId) {
            return { ...list };
          }
          return list;
        })
      );
    }
  }, [activityId, newTitle]);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [activities, lists]);

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
