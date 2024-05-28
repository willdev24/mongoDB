const express = require('express')
const fs = require('fs')
const path = require("path")

const app = express()

app.set('view engine', 'ejs')
app.set('views' , path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req,res)=>{

    res.render("index")

})


app.get("/api",(req, res)=>{
    
    res.sendFile(__dirname +  '/cadastrados.json')
  
})

app.use((req,res)=>{

    res.send("erro, pagna nao encontrada")

})


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
    
})