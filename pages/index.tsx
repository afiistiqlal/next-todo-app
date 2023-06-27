import React, { useEffect, useState } from "react";
import EmptyActivity from "@/components/molecules/EmptyActivity";
import Layout from "@/components/templates/Layout";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import ActivityGrid from "@/components/templates/ActivityGrid";
import ActivityCard from "@/components/molecules/ActivityCard";
import Header from "@/components/templates/Header";
import Hygraph from "./api/hygraph";
import { activityQuery } from "./api/query";

interface Activity {
  activityId: number;
  activityTitle: string;
  activityDate: string;
}

type Props = {
  allActivity: Activity;
};

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

export async function getStaticProps() {
  try {
    const { allActivity } = await Hygraph.request<{ allActivity: Activity[] }>(
      activityQuery
    );

    if (!allActivity) {
      return {
        props: {
          allActivity: [],
        },
      };
    }

    return {
      props: {
        allActivity,
      },
    };
  } catch (error) {
    return {
      props: {
        allActivity: ["error"],
      },
    };
  }
}

export default function Home({ allActivity }: Props) {
  // console.log(allActivity);
  const [activities, setActivities] = useState<Activity[]>([]);

  // useEffect(() => {
  //   const savedActivities = localStorage.getItem("activities");
  //   if (savedActivities) {
  //     setActivities(JSON.parse(savedActivities));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("activities", JSON.stringify(activities));
  // }, [activities]);

  const addActivity = () => {
    const newActivity = {
      activityId: activities.length + 1,
      activityTitle: "New Activity",
      activityDate: currentDate(),
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
                id={activity.activityId}
                title={activity.activityTitle}
                date={activity.activityDate}
                deleteCard={() => removeActivity(index)}
              />
            ))}
          </ActivityGrid>
        )}
      </div>
    </Layout>
  );
}
