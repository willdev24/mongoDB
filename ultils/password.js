const bcript = require("bcrypt")

async function criptografar(senha){

const salt = await bcript.genSalt()
const password = await bcript.hash(senha, salt)

return password


}

module.exports={
    criptografar
}