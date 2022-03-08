import * as mongoDB from "mongodb";
import RestauranteModel from "../models/RestauranteModel";

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING as string
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const restaurantesCollection: mongoDB.Collection =
    db.collection("restaurantes");

  collections.restaurantes = restaurantesCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${restaurantesCollection.collectionName}`
  );
}

export const saveRestaurante = async (restaurante: RestauranteModel) => {
  if (
    collections.restaurantes == undefined ||
    collections.restaurantes == null
  ) {
    return undefined;
  }
  const result = await collections.restaurantes.insertOne(restaurante);
  return result;
};

export const collections: { restaurantes?: mongoDB.Collection } = {};
