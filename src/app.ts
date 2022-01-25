import express, { Application, Request, Response } from "express";
import http from "http";
import helmet from "helmet";
import Routes from "./routes";
import cors from "cors";



const app: Application = express();
const server = http.createServer(app);

app.use(helmet.hidePoweredBy());
app.use(Routes);

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }));
  


const PORT = 5000;
server.listen(PORT);
server.on("listening", () => {
    console.info("server up listening");



});