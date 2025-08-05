const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

app.get("/bem vindo", (req, res)=>{
    res.send("olá, seja bem vindo a API")
})

app.post("/bem vindo", (req, res)=>{
    const dados = req.body
    res.send("olá, seja bem vindo" + dados.nome)
})

app.listen(port, () =>{
    console.log("API RODANDO NA RODA" + port)
})