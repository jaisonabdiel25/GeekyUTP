/*
    Ruta: /api/brands
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getBrands, newBrand, updateBrand} = require("../controllers/brand");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/", getBrands);
router.post("/",
  [check("name", "Envíe el nombre de la marca").not().isEmpty(), validarCampos],
  newBrand
);
router.put("/", updateBrand);

module.exports = router;
