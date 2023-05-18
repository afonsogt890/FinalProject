import express from "express";
import asyncHandler from "express-async-handler";
import gamesData from "../gamesData.js";
import Games from "../../../models/games.js";

const gamesRouter = express.Router();

gamesRouter.post("/add", asyncHandler(async (req, res)=> {
    await Games.remove({})
    const postGame = await Games.insertMany(gamesData)
    res.send({postGame})
    console.log(postGame)
}))

gamesRouter.get("/", asyncHandler(async (req, res)=> {
    const getGames = await Games.find({})
    res.json(getGames)
    console.log(`<Route GamesLanguages>: Get Games`)
}))

export default gamesRouter;