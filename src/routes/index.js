const router = require("express").Router()
const fs = require("fs")
const { controu } = require("../models/customers")




router.get("/", (req,res)=>{

    res.render("index")

})

router.post("/cadastro_clientes",(req,res)=>{
const {senha,email,nome,fone}= req.body

const dadosClientes = fs.readFileSync("./src/cadastrados.json")
const dadosCLINT = JSON.parse(dadosClientes)

dadosCLINT.push({
    nome,
    email,
    senha,
    fone
})

const mandarprobanco ={nome,email,senha,fone}

controu(mandarprobanco)

const retorno   = JSON.stringify(dadosCLINT)
fs.writeFileSync("./src/cadastrados.json", retorno)


console.log(req.body)
res.redirect("/")

})

router.get("/api",(req, res)=>{
    
res.sendFile(__dirname +  '/cadastrados.json',{
    api:__dirname +  '/cadastrados.json'
})
  
})

router.use((req,res)=>{

    res.send("erro, pagna nao encontrada")

})

module.exports={
    router
}