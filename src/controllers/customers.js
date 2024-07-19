const {Model}= require("../models/customers")


function add(req,res){
 const {
    name,
    email,
    password,
    contato}= req.body

//--primeira opçao
//const mandarprobanco ={nome,email,senha,fone}
//models.controu(mandarprobanco)


//fazer a segunda opçao
const register = new Model({

    name,
    email,
    password,
    contato
})

register.save()
 
console.log("ok funcionou")
res.redirect("/")
}

module.exports = {
    add
}
