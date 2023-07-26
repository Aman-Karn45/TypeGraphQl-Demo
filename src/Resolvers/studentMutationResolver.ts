import { Resolver, Mutation, Arg, Args } from "type-graphql";
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
  ): Promise<IStudent> {
    //IStudent check 
    try {
      const { data }: { data: IStudent } = await client.query(
        q.Create(q.Collection("studentdata"), {
          data: { name, email, age },
        })
      );
      console.log("result", data);
      return data;
    } catch (error) {
      console.log("error", error);
      // return null
      throw new Error("Failed to update the student data ");
    }
  }

  @Mutation(() => IStudent)
  async updateStudent(
    @Arg("id") id: string,
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("age") age: string
  ): Promise<IStudent> {
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
      console.log("update", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error("Failed to add the student data ");
    }
  }

  @Mutation(() => IStudent)
  async deleteStudent(
      @Arg("id") id:string
  ): Promise<IStudent> {
    try {
      const { data }: { data: IStudent } = await client.query(
        q.Delete(q.Ref(q.Collection("studentdata"),id))
      );
      console.log("deleted data ",data)
      return data 
    } catch (error) {
      console.log("error", error);
      throw new Error("Failed to delete the student data ");
    }
  }
}

export default StudentMutationResolvers;
