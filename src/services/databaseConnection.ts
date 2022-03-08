import { MongoClient } from "mongodb";
// Create a module-scoped MongoClient promise.
// CRITICAL: You must call connect() outside the handler so that the client
// can be reused across function invocations.
let client = new MongoClient(process.env.DB_CONN_STRING as string);
const clientPromise = client.connect();
// Handler
module.exports.handler = async function (event: any, context: any) {
  // Get the MongoClient by calling await on the promise.
  // Because this is a promise, it will only resolve once.
  client = await clientPromise;
  // Use the client to return the name of the connected database.
  return client.db(process.env.DB_NAME).collection("restaurantes");
};
