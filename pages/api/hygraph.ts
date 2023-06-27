import { GraphQLClient } from "graphql-request";

const url: string | undefined = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "";
const token: string | undefined = process.env.HYGRAPH_TOKEN;

const Hygraph = new GraphQLClient(url, {
  headers: {
    Authorization: "Bearer " + token,
  },
});

export default Hygraph;
