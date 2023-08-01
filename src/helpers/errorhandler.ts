import { IStudent } from "../Schema/Schema";

export const errorHandler = (error: any): IStudent | null => {
  if (error.response) {
    console.log("Server responded with an error:", error.response.data);
  } else if (error.request) {
    console.error("No response received from the server:", error.request);
  } else {
    console.error("Error occurred:", error.message);
  }
   return null;
};
