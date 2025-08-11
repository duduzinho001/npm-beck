const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

const usuarios = []

app.post("/usuarios", (req, res)=>{
    const usuarios = req.body
    usuarios.push(usuarios)
    res.send("Usuario cadastrado com sucesso!")
})

app.get("/usuarios", (req, res)=>{
    res.send(usuarios)
})          

app.get("/bemvindo",(req, res)=>{
    res.send("Olá, seja bem vindo a API")
})

app.post("/bemvindo",(req, res)=>{
    const dados = req.body
    res.send("Olá, seja bem vindo" + dados.nome)
})



app.listen(port, ()=>{
    console.log("API RODANDO NA PORTA" + port)
})
