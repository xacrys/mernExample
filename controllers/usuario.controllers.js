const Usuario = require("../model/usuario.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.login = (req, res, next)=>{
    let hashedPass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    console.log(hashedPass);
    //console.log(req.body.usuario);
    //console.log(Usuario);
    
    Usuario.findOne({username:req.body.user, password:hashedPass},(error, usuario)=>{
        let response = {
            token: null
        }
        console.log(usuario);
        if(usuario!==null){
            
            response.token = jwt.sign({id:usuario._id, usuario: usuario.username},"__secret__")
        }
        res.json(response);
    })
}
