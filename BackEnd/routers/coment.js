/*
    Ruta: /api/coments
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { newComent, getComents} = require("../controllers/coment");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/:id", getComents);
router.post("/",  newComent);


module.exports = router;