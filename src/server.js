const express = require('express')
const fs = require('fs')
const path = require("path")

const db = require('./database')
const {router} = require('./routes')
const {  claint02, register}= require("./models/customers")//models para salvar no banco 
const { default: mongoose, model } = require('mongoose')


const app = express()

//chamando a funcao do banco de dados 
db.conect()

app.set('view engine', 'ejs')
app.set('views' , path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, "public")))

// chamando os models e salvando no banco de dados 
claint02.save()
register.save()    

//rotas

app.use("", router)



//rodando servidor
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
    
})