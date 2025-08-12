const express = require ("express")
const app = express()
const port = 3003
app.use(express.json())

app.get("/bem vindo",()=>{
    const dados = req.body
    res.send("Olá, seja bem vindo a API")
})

app.post(port, (req, res)=>{
    const dados = req.body
    console.log("olá, seja bem vindo" + dados.nome)
})

const usuarios = []
app.post("/usuarios", (req, res)=>{
    const usuario = req.body
    usuarios.push(usuario)
    res.send("Usuário cadastrado com sucesso!")
    })
app.get("/usuarios", (req, res)=>{
    res.send(usuarios)
})

app.listen(port, ()=>{
    console.log("API RODANDO NA PORTA  " + port)
})
