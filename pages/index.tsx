import React, { useEffect, useState } from "react";
import EmptyActivity from "@/components/molecules/EmptyActivity";
import Layout from "@/components/templates/Layout";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import ActivityGrid from "@/components/templates/ActivityGrid";
import ActivityCard from "@/components/molecules/ActivityCard";
import Header from "@/components/templates/Header";
import Hygraph from "./api/hygraph";
import {
  getActivities,
  addActivityQuery,
  deleteActivityQuery,
} from "./api/query";

interface Activity {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  activities: Activity[];
  // createActivity: Activity;
  deleteActivity: Activity;
}

export async function getStaticProps(id: string) {
  try {
    const { activities } = await Hygraph.request<{ activities: Activity[] }>(
      getActivities
    );

    return {
      props: {
        activities,
      },
    };
  } catch (error) {
    return {
      props: {
        activities: ["error fetching data"],
        createActivity: "Failed create new activity",
      },
    };
  }
}

export default function Home({ activities }: Props) {
  const createActivityHandle = () => {
    Hygraph.request(addActivityQuery("New Activity"));
  };

  const removeActivity = (id: string) => {
    Hygraph.request(deleteActivityQuery(id));
  };

  return (
    <Layout>
      <Header>
        <Heading>Activity</Heading>
        <Button text="➕ Tambah" onClick={createActivityHandle} />
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
                createdAt={activity.createdAt}
                deleteCard={() => removeActivity(activity.id)}
              />
            ))}
          </ActivityGrid>
        )}
      </div>
    </Layout>
  );
}
