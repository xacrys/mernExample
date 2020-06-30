const Prueba = require("../model/prueba.model");
let resAux = {
    stateError: false,
    mensaje:""
};

exports.create = function(req, res){
    let prueba = new Prueba({
        nombre :req.body.nombre,
        description :req.body.description,
        estado :req.body.estado
    });

    prueba.save((error)=>{
        if(error){
            console.log(error);
            resAux.mensaje ="Error al guardar";
            resAux.stateError =false;
            res.json(resAux);
            return;
        }
        resAux.mensaje ="Exito al guardar";
        resAux.stateError =true;
        res.json(resAux);
    })
}

exports.find = (req, res)=>{
    Prueba.find((error,listaPruebas)=>{
        res.json(listaPruebas);
    })

}

exports.findOne = (req,res)=>{
    Prueba.findOne({_id:req.params.id},(error,prueba)=>{
        res.json(prueba);
    })
}

exports.update = (req, res)=>{
    let prueba = {
        nombre :req.body.nombre,
        description :req.body.description,
        estado :req.body.estado
    };
    Prueba.findByIdAndUpdate(req.params.id,{$set:prueba}, (error)=>{
        if(error){
            console.log(error);
            resAux.mensaje ="Error al actualizar";
            resAux.stateError =false;
            res.json(resAux);
            return;
        }
        resAux.mensaje ="Exito al guardar";
        resAux.stateError =true;
        res.json(resAux);
    })
       
}

exports.remove = (req, res)=>{
    console.log("1");
    Prueba.findByIdAndRemove = ({_id: req.params.id}, (error)=>{
        if(error){
            console.log(error);
            resAux.mensaje ="Error al eliminar prueba";
            resAux.stateError =false;
            res.json(resAux);
            return;
        }
        console.log("2");
        resAux.mensaje ="Exito al eliminar";
        resAux.stateError =true;
        res.json(resAux);
    } )
}