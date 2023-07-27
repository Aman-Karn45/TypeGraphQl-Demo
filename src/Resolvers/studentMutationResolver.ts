import { Resolver, Mutation, Arg } from "type-graphql";
import { query as q } from "faunadb";
import { client } from "../Config/dbConn";
import { IStudent } from "../Schema/Schema";

@Resolver()
class StudentMutationResolvers {
  @Mutation(() => IStudent)
  async addStudent(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("age") age: string
  ): Promise<IStudent | null> {
    try {
      const { data }: { data: IStudent } = await client.query(
        q.Create(q.Collection("studentdata"), {
          data: { name, email, age },
        })
      );
      return data;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }

  @Mutation(() => IStudent)
  async updateStudent(
    @Arg("id") id: string,
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("age") age: string
  ): Promise<IStudent | null> {
    try {
      const { data }: { data: IStudent } = await client.query(
        q.Update(q.Ref(q.Collection("studentdata"), id), {
          data: {
            name,
            email,
            age,
          },
        })
      );
      return data;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }

  @Mutation(() => IStudent)
  async deleteStudent(@Arg("id") id: string): Promise<IStudent | null> {
    try {
      const { data }: { data: IStudent } = await client.query(
        q.Delete(q.Ref(q.Collection("studentdata"), id))
      );
      return data;
    } catch (error) {
      return null;
    }
  }
}

export default StudentMutationResolvers;
