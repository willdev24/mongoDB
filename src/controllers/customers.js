const { criptografar } = require("../../ultils/password")
const {Model, Model02}= require("../models/customers")

function index(req, res){

    res.render("cadastro",{
        title:"cadastro",
        
    })

}



async function add(req,res){
 const {
    name,
    email,
    senha,
    contato,
    def, 
        }= req.body

const password = await criptografar(senha)


if(def){
    
    const clintsEspeciais = new Model02({
    
        name,
        email,
        password,
        contato,
        def,
    
    })

    clintsEspeciais.save()
    
}else{

const register = new Model({

    name,
    email,
    password:password,
    contato,
     
})

register.save()
}


console.log("ok funcionou")
res.redirect("/?c1=1")
}

module.exports = {
    index,
    add,
}
