import express from "express"; //Library pra criar o codigo base da api
import connectdb from "./mongodb/connectiondb.js";

const app = express(); //Variavel pra chamar uma função do express
const port = 3001

connectdb();
app.listen(port, console.log(`server port: ${port}`))