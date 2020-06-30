const moongose = require("mongoose");
const Schema = moongose.Schema;

const usuarioSchema = new moongose.Schema({
    username: {type:String, required:true,max:60},
    password: {type:String, required:true,max:128}
});

module.exports = moongose.model("usuario", usuarioSchema,"usuario");