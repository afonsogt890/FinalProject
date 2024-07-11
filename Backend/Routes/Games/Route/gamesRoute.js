import express from "express";
import asyncHandler from "express-async-handler";
import gamesData from "../gamesData.js";
import Games from "../../../models/games.js";

const gamesRouter = express.Router();

//Ir Buscar Os Ficheiros do template de dados e adicionar a base de dados

gamesRouter.get("/add", asyncHandler(async (req, res)=> {
    try {

    await Games.remove({})
    const postGame = await Games.insertMany(gamesData)
    res.send({postGame})
    console.log(postGame)
        
    } catch(e){
        console.error(e)
    }
    
}))

//Route da API que permite ir ver os jogos que existem na base de dados

gamesRouter.get("/", asyncHandler(async (req, res)=> {
    const getGames = await Games.find({})
    res.json(getGames)
    console.log(`<Route GamesLanguages>: Get Games`)
}))

//Route para ordenar os jogos pelo o nome

gamesRouter.post("/:name", asyncHandler(async (req, res)=> {
    const nameCateg = await Games.find({categorie: req.params.name})
    res.json(nameCateg)
    console.log(nameCateg)
}))

export default gamesRouter;