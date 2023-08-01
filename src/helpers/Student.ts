import { query as q } from "faunadb";
import { client } from "../Config/dbConn";
import { IStudent } from "../Schema/Schema";
import { errorHandler } from "../helpers/errorhandler";

export const createStudent = async (
  name: string,
  email: string,
  age: string
): Promise<IStudent | null> => {
  try {
    const { data }: { data: IStudent } = await client.query(
      q.Create(q.Collection("studentdata"), {
        data: { name, email, age },
      })
    );
    return data;
  } catch (error) {
    // return errorHandler(error);
    return null
  }
};

export const UpdateData = async (
  id: string,
  name: string,
  email: string,
  age: string
): Promise<IStudent | null> => {
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
      return null 

    // return errorHandler(error);
  }
};

export const deltedData = async (id: string): Promise<IStudent | null> => {
  try {
    const { data }: { data: IStudent } = await client.query(
      q.Delete(q.Ref(q.Collection("studentdata"), id))
    );
    return data;
  } catch (error) {
      return null
    // return errorHandler(error);
  }
};
