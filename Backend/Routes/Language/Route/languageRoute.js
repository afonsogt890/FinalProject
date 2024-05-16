import express from "express";
import asyncHandler from "express-async-handler";
import languageData from "../languageData.js";
import Languages from "../../../Models/language.js";

const languageRouter = express.Router();

languageRouter.post("/add", asyncHandler(async (req, res)=> {
    await Languages.remove({})
    const postLang = await Languages.insertMany(languageData)
    res.send({postLang})
    console.log(postLang)
}))

languageRouter.get("/", asyncHandler(async (req, res)=> {
    const getLang = await Languages.find({})
    res.json(getLang)
    console.log(`<Route Languages>: Get Languages`)
}))

export default languageRouter;


