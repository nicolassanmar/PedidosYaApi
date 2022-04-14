import * as databaseConnection from "./databaseConnection";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

interface ILocationLog {
  lat: number;
  long: number;
  timestamp: Date;
}

const locationLogSchema = new mongoose.Schema<ILocationLog>({
  lat: mongoose.Schema.Types.Number,
  long: mongoose.Schema.Types.Number,
  timestamp: mongoose.Schema.Types.Date,
});

const LocationLog = mongoose.model("LocationLog", locationLogSchema);

export const saveLocationLog = async (lat: number, long: number) => {
  const db = mongoose.connection;
  const collection = db.collection("logs");
  const locationLog = new LocationLog({ lat, long, timestamp: new Date() });
  collection.insertOne(locationLog);
};
