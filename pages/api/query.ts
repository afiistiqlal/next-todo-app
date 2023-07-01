import { gql } from "graphql-request";

export const addActivityQuery = (title: string) => gql`
  mutation Activities {
    createActivity(data: { title: "${title}" }) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;

export const deleteActivityQuery = (id: string) => gql`
  mutation {
    deleteActivity(where: { id: "${id}" }) {
    id
    title
    createdAt
    updatedAt
  }
  }
`;

export const getActivities = gql`
  {
    activities {
      id
      title
      createdAt
      updatedAt
    }
  }
`;

export const getLists = gql`
  {
    query
    ActivityList($activityId: ID!) {
      activityLists(where: { activityId: $activityId }) {
        id
        finished
        listId
        listTitle
        priorityId
        listDateTime
      }
    }
  }
`;

export const getPriorities = gql`
  {
    priorities {
      id
      priorityName
    }
  }
`;
