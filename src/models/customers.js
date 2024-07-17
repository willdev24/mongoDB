const mongoose = require("mongoose")



const schema = new mongoose.Schema({

    name: String,
    age: Number,
    cpf:Number,
    email:String,
    password:String,
    
    
    })
    
    
    
    const Model = mongoose.model('clientes', schema)
    
    const register = new Model({
        name: 'teste001',
        age: 19,
        cpf: 70635476231,
        email:'go71782@gmail.com',
        password:'90150709'
        
    })
    
    const claint02 = new Model({
        
        name: 'teste202',
        age: 1,
        cpf: 70635476231,
        email:'go71782@gmail.com',
        password:'303015'
    
    })
    
    
    module.exports={
        claint02,
        register
    }
    