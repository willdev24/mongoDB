const mongoose = require("mongoose")

    

    const schema = new mongoose.Schema({

        name: String,
        contato: Number,
        email:String,
        password:String,
        
        })
            
        const Model = mongoose.model('clientes', schema)
    



    module.exports={
        Model
    }
    