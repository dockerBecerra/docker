import { Router } from "express";

const channelRoute = Router();

channelRoute.get("/", (req, res) => {
    res.json({
        application: "Youtube"
    })
})
channelRoute.get("/canal", (req, res) => {
    res.json({
        msg: "Hola mundo",
        application: "Youtube",
        type: "Backend"
    })
})

export default channelRoute;