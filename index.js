const express = require('express')
const fs = require('fs')

const app = express()

app.get("/api",(req, res)=>{

    res.sendFile( __dirname + "/cadastrados.json")
})














const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})