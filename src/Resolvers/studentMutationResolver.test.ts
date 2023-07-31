import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import StudentMutationResolvers from "./studentMutationResolver";
import StudentQueryResolvers from "./studentQueryResolver";
import { client } from "../Config/dbConn";

let apolloServer: ApolloServer;
const TestSchema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: [StudentMutationResolvers, StudentQueryResolvers],
  });
};
beforeAll(async () => {
  const schema = await TestSchema();
  apolloServer = new ApolloServer({ schema });
});

describe("StudentMutationResolvers", () => {
  describe("addStudent", () => {
    it("should add a new student", async () => {
      const queryMock = jest.spyOn(client, "query");
      queryMock.mockResolvedValueOnce({
        data: {
          name: "Aman Karn",
          email: "aman@example.com",
          age: "22",
        },
      });

      //only for testing 

    //   const mutation = `
    //     mutation {
    //       addStudent(name: "Aman Karn", email: "aman@gmail.com", age: "22") {
    //         name
    //         email
    //         age
    //       }
    //     }
    //   `;

      const mutationResolver = new StudentMutationResolvers();

      const args = {
        name: "Aman Karn",
        email: "aman@gmail.com",
        age: "22",
      };
      // const result = await apolloServer.executeOperation({
      //   query: mutation,
      // });

      const result = await mutationResolver.addStudent(
        args.name,
        args.email,
        args.age
      );
      const expectedResult = {
        name: "Aman Karn",
        email: "aman@example.com",
        age: "22",
      };
      expect(result).toEqual(expectedResult);

    });
  });
});
