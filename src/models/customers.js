const mongoose = require("mongoose")

    

    const schema = new mongoose.Schema({

        name: String,
        contato: Number,
        email:String,
        password:String,
        def:String,
        
        })
            
        const Model = mongoose.model('clientes', schema)
        const Model02 = mongoose.model('especiais', schema)



    module.exports={
        Model,
        Model02
    }
    