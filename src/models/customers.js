const mongoose = require("mongoose")

    
const controu = (obj)=>{

    const schema = new mongoose.Schema({

        name: String,
        contato: Number,
        email:String,
        password:String,
        
        })
            
        const Model = mongoose.model('clientes', schema)
    
   const register = new Model({
        name: obj.nome,
        contato: obj.fone,
        email:obj.email,
        password:obj.senha
        
    })
    

register.save()

}
    module.exports={
        controu
    }
    