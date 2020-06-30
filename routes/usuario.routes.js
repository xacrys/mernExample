const express = require("express")
const router = express.Router()
const usuarioContralador = require("../controllers/usuario.controllers")

router.post("/login", usuarioContralador.login)

module.exports = router