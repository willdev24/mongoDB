const mongoose =require("mongoose")


//conectando no banco mongoDB
function conect(){
mongoose.connect("mongodb://localhost:27017/primeiro_projeto")
const monGoDB =mongoose.connection

monGoDB.once( "open", ()=>{
    console.log("conectado ao banco de dados")
})

monGoDB.on("erro",console.error.bind(console,"conection erro :"))
}//banco conctado

module.exports ={
    conect
} 