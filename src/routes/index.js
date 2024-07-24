const router = require("express").Router()
const fs = require("fs")
const { controu } = require("../models/customers")

const CostomersControll = require("../controllers/customers")
const { title } = require("process")
const indexControll = require("../controllers/index")

router.get("/",indexControll.index)


router.get("/registro", CostomersControll.index)
router.post("/cadastro_clientes", CostomersControll.add)



router.get("/api",(req, res)=>{
    
res.sendFile(__dirname +  '/cadastrados.json',{
    api:__dirname +  '/cadastrados.json'
})
  
})

router.use((req,res)=>{
    
    res.send("erro, pagna nao encontrada")

})



/*
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
*/

module.exports={
    router
}