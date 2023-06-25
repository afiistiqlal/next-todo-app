import React, { useEffect, useState } from "react";
import EmptyActivity from "@/components/molecules/EmptyActivity";
import Layout from "@/components/templates/Layout";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import ActivityGrid from "@/components/templates/ActivityGrid";
import ActivityCard from "@/components/molecules/ActivityCard";
import Header from "@/components/templates/Header";

interface Activity {
  id: number;
  title: string;
  date: string;
}

const currentDate = () => {
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

  useEffect(() => {
    const savedActivities = localStorage.getItem("activities");
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const addActivity = () => {
    const newActivity = {
      id: activities.length + 1,
      title: "New Activity",
      date: currentDate(),
    };
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  const removeActivity = (cardIndex: any) => {
    setActivities((prevActivities) =>
      prevActivities.filter((value, i) => i !== cardIndex)
    );
  };

  return (
    <Layout>
      <Header>
        <Heading>Activity</Heading>
        <Button text="➕ Tambah" onClick={addActivity} />
      </Header>
      <div className="py-8">
        {activities.length === 0 ? (
          <EmptyActivity />
        ) : (
          <ActivityGrid>
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                id={activity.id}
                title={activity.title}
                date={activity.date}
                deleteCard={() => removeActivity(index)}
              />
            ))}
          </ActivityGrid>
        )}
      </div>
    </Layout>
  );
}
