import express from "express";
import asyncHandler from "express-async-handler";
import languageData from "../languageData";
import Languages from "../../models/language";

const ExampleRouter = express.Router();

ExampleRouter.post("/language", asyncHandler(async))

