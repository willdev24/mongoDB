const router = require("express").Router()

router.get("/", (req,res)=>{

    res.render("index")

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