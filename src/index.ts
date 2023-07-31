import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import StudentMutationResolvers from "./Resolvers/studentMutationResolver";
import StudentQueryResolvers from "./Resolvers/studentQueryResolver";
require("dotenv").config();
const PORT = process.env.PORT;

export const createServer = async () => {
  const schema = await buildSchema({
    resolvers: [StudentQueryResolvers, StudentMutationResolvers],
  });
  const server = new ApolloServer({ schema });
  return server;
};

export const startServer = async () => {
  const server = await createServer();
  await server.listen({ port: PORT });
  console.log(`Server running on http://localhost:${PORT}`);
};

if (require.main === module) {
  startServer();
}
