import { Query, Resolver } from "type-graphql";
import { query as q } from "faunadb";
import { client } from "../Config/dbConn";
import { IStudent } from "../Schema/Schema";

@Resolver(IStudent)
class StudentQueryResolvers {
  @Query(() => [IStudent])
  async getStudents(): Promise<any> {
    try {
      const { data }:any = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("studentdata"))),
          q.Lambda((x) => q.Get(x))
        )
      );
      return data?.map((d: any) => ({
        id: d.ref.id,
        name: d.data.name,
        email: d.data.email,
        age: d.data.age,
      }));
    } catch (error) {
      console.log("error", error);
    }
  }
}

export default StudentQueryResolvers