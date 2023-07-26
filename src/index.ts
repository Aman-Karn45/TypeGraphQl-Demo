import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import StudentMutationResolvers from "./Resolvers/studentMutationResolver";
import StudentQueryResolvers from "./Resolvers/studentQueryResolver";
require("dotenv").config();
const PORT = process.env.PORT;

const createServer = async () => {
  const schema = await buildSchema({
    resolvers: [StudentQueryResolvers, StudentMutationResolvers],
  });
  const server = new ApolloServer({ schema });
  return server;
};

createServer().then((server) => {
  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server running on ${url}`);
  });
});
