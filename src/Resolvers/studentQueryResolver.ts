import { Query, Resolver } from "type-graphql";
import { query as q } from "faunadb";
import { client } from "../Config/dbConn";
import { IStudent } from "../Schema/Schema";

@Resolver()
class StudentQueryResolvers {
  @Query(() => [IStudent])
  async getStudents(): Promise<IStudent | null> {
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
      return null 
    }
  }
}
export default StudentQueryResolvers