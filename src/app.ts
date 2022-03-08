import express, { Application, Request, Response } from "express";
import http from "http";
import helmet from "helmet";
import Routes from "./routes";
import cors from "cors";
import * as dotenv from "dotenv";
import { connectToDatabase } from "./services/DatabaseService";
import serverless from "serverless-http";

const app: Application = express();
const server = http.createServer(app);

app.use(helmet.hidePoweredBy());

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);

app.use(Routes);

//server.listen(5000);

server.on("listening", () => {
  dotenv.config();

  console.info("server up listening");
});

module.exports.handler = serverless(app);
