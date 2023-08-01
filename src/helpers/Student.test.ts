import { client } from "../Config/dbConn";
import { createStudent, UpdateData, deltedData } from "./Student";

const mockedData = { name: "Aman Karn", email: "aman@gmail12.com", age: "23" };

const UpdateMockedData = {
  id: "123",
  name: "Aman 12",
  email: "aman@gmail.com",
  age: "23",
};

test("create Student", async () => {
  jest.spyOn(client, "query").mockResolvedValueOnce({ data: mockedData });
  const result = await createStudent("Aman karn", "aman@gmail12.com", "23");
  expect(result).toEqual(mockedData);
});

test("UPdate Student", async () => {
  jest.spyOn(client, "query").mockResolvedValueOnce({ data: UpdateMockedData });
  const updatedResult = await UpdateData(
    "123",
    "Aman 12",
    "aman@gmail.com",
    "23"
  );
  expect(updatedResult).toEqual(UpdateMockedData);
});

describe("Deletd", () => {
  test("Delete Data", async () => {
    jest.spyOn(client, "query").mockResolvedValueOnce({ data: mockedData });
    const deletdResult = await deltedData("123");
    expect(deletdResult).toEqual(mockedData);
 
  });

  test("Should return null if error", async () => {
    jest.spyOn(client, "query").mockRejectedValueOnce(new Error("Some Error"));
    const deletedStudent = await deltedData("123");
    expect(deletedStudent).toBeNull();
  });
});
