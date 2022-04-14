import mongoose from "mongoose";

export default () => {
  //const url = process.env.DB_CONN_STRING as string;

  const url =
    "mongodb+srv://admin:G97LQbUMfff5gWIg@logs.bipvp.mongodb.net/logs?retryWrites=true&w=majority";
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. ${err}`);
    });
};
