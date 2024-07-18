const router = require("express").Router()
const fs = require("fs")

router.get("/", (req,res)=>{

    res.render("index")

})

router.post("/cadastro_clientes",(req,res)=>{
const {senha,email,nome,fone}= req.body


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