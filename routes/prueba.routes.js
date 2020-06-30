const express = require("express")
const router = express.Router()
const pruebaContralador = require("../controllers/prueba.controllers")

router.post("/", pruebaContralador.create)
router.get("/", pruebaContralador.find)
router.get("/:id", pruebaContralador.findOne)
router.put("/:id", pruebaContralador.update)
router.delete("/:id", pruebaContralador.remove)

module.exports = router