const mongoose = require("mongoose")
const fs = require("fs")

const schema = new mongoose.Schema({

    name: String,
    contato: Number,
    email:String,
    password:String,
    
    })
        
    const Model = mongoose.model('clientes', schema)
    
const controu = (obj)=>{


   const register = new Model({
        name: obj.nome,
        contato: obj.contato,
        email:obj.email,
        password:obj.password
        
    })
    
    

register.save()    

    
}
    module.exports={

        controu
    }
    