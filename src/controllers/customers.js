const models = require("../models/customers")


function add(req,res){
 const {senha,email,nome,fone}= req.body
 const mandarprobanco ={nome,email,senha,fone}
models.controu(mandarprobanco)
 
 
console.log("ok funcionou")
res.redirect("/")
}

module.exports = {
    add
}
