const models = require("../models/customers")


function add(req,res){
 const {senha,email,nome,fone}= req.body

//--primeira opçao
//const mandarprobanco ={nome,email,senha,fone}
//models.controu(mandarprobanco)


//fazer a segunda opçao
const register = new models({

    nome,
    email,
    senha,
    fone
})

register.save()
 
console.log("ok funcionou")
res.redirect("/")
}

module.exports = {
    add
}
