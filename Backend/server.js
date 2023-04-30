import express, { Router } from "express"; //Library pra criar o codigo base da api
import connectdb from "./mongodb/connectiondb.js";
import languageRouter from "./Routes/Language/Route/languageRoute.js";

const app = express(); //Variavel pra chamar uma função do express
const port = 3001;

connectdb();
app.use(express.json());
//API Route
//Langugage Route
app.use("/api/language", languageRouter)
app.listen(port, console.log(`server port: ${port}`));