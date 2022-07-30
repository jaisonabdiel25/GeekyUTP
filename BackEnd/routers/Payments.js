/*
    Ruta: /api/payments
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { paymentYappy} = require("../controllers/Payments");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post("/", paymentYappy);

module.exports = router;