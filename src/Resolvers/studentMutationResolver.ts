import { Resolver, Mutation, Arg } from "type-graphql";
import { query as q } from "faunadb";
import { client } from "../Config/dbConn";
import { IStudent } from "../Schema/Schema";
import { createStudent, deltedData, UpdateData } from "../helpers/Student";

@Resolver()
class StudentMutationResolvers {


  @Mutation(() => IStudent)
  async addStudent(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("age") age: string
  ): Promise<IStudent | null> {
    return createStudent(name, email, age);
  }

  @Mutation(() => IStudent)
  async updateStudent(
    @Arg("id") id: string,
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("age") age: string
  ): Promise<IStudent | null> {
    return UpdateData(id, name, email, age);
  }

  @Mutation(() => IStudent)
  async deleteStudent(@Arg("id") id: string): Promise<IStudent | null> {
   return deltedData(id)
  }
}

export default StudentMutationResolvers;
