import React, { useState } from "react";
import EmptyActivity from "@/components/molecules/EmptyActivity";
import Layout from "@/components/templates/Layout";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import ActivityGrid from "@/components/templates/ActivityGrid";
import ActivityCard from "@/components/molecules/ActivityCard";

interface Activity {
  title: string;
  date: string;
}

const now = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let mm = monthNames[today.getMonth()];
  let dd = today.getDate();

  if (dd < 10) dd = dd;

  const formattedToday = dd + " " + mm + " " + yyyy;
  return formattedToday;
};

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const addActivity = () => {
    const newActivity = {
      title: "",
      date: now(),
    };
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <Heading text={"Activity"} />
        <Button text="➕ Tambah" onClick={addActivity} />
      </div>
      <div className="py-8">
        {activities.length === 0 ? (
          <EmptyActivity />
        ) : (
          <ActivityGrid>
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                title={activity.title}
                date={activity.date}
              />
            ))}
          </ActivityGrid>
        )}
      </div>
    </Layout>
  );
}
