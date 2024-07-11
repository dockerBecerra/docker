import { Router } from "express";
import channelRoute from "./routes.channel.js";

const ruta = Router();

ruta.use("/", channelRoute)

export default ruta;