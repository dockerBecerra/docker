import express from "express";
import { config } from "dotenv"
import ruta from "./routes/index.js";
config();

const server = express();

server.set("port", process.env.PORT || 4550);

server.use("/", ruta)

export default server;