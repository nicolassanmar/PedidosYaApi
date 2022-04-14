import "dotenv/config";
import express, { Application, Request, Response } from "express";
import http from "http";
import helmet from "helmet";
import Routes from "./routes";
import cors from "cors";
import * as dotenv from "dotenv";
import serverless from "serverless-http";
import databaseConnection from "./services/databaseConnection";
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

databaseConnection();

server.listen(process.env.PORT || 5000);

server.on("listening", () => {
  dotenv.config();

  console.info("server up listening");
});

module.exports.handler = serverless(app);
