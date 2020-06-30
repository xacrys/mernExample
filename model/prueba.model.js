const moongose = require("mongoose");
const Schema = moongose.Schema;

const pruebaSchema = new moongose.Schema({
    nombre :{type:String, required:true,max:60},
    description :{type:String, required:true,max:100},
    estado :{type:Boolean, required:true}
});

module.exports = moongose.model("prueba", pruebaSchema);