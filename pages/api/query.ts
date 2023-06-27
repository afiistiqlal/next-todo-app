import { gql } from "graphql-request";

export const activityQuery = gql`
  {
    activities {
      activityDate
      activityId
      activityTitle
    }
  }
`;

export const lists = gql`
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

export const priorities = gql`
  {
    priorities {
      id
      priorityName
    }
  }
`;
