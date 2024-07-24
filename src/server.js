const express = require('express')
const path = require("path")

const db = require('./database')
const {router} = require('./routes')

const { default: mongoose, model } = require('mongoose')


const app = express()

//chamando a funcao do banco de dados 
db.conect()



app.set('view engine', 'ejs')
app.set('views' , path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:true}))


// rotas

app.use("/", router)
//app.use("registro", router)


//rodando servidor
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
    
})