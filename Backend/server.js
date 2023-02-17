import express from "express"; //Library pra criar o codigo base da api

const app = express(); //Variavel pra chamar uma função do express
const port = 3001

app.listen(port, console.log(`server port: ${port}`))