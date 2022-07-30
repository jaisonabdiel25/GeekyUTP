/*
    Ruta: /api/province
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getProvinces, newProvince, updateProvince} = require("../controllers/province");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/", getProvinces);
router.post("/",
  [check("name", "Envíe el nombre de la provincia").not().isEmpty(), validarCampos],
  newProvince
);
router.put("/", updateProvince);

module.exports = router;