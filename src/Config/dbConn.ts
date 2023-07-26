import faunadb from "faunadb";
require("dotenv").config();

const secretKey = process.env.FAUNA_DB_SECRET_KEY;
if (!secretKey) {
  console.log("FAUNADB_SECRETKEY is not defined in the environment variables.");
}

export const client = new faunadb.Client({
  secret: `${secretKey}`,
});
