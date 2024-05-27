const express = require('express')
const fs = require('fs')
const path = require("path")

const app = express()

app.set('view engine', 'ejs')
app.set('views' , path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, "public")))


app.get("/api",(req, res)=>{

    
    res.sendFile(__dirname +  '/cadastrados.json')
  
})


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
    
})