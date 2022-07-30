/*
    Ruta: /api/subcategorie
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getSubcategories, newSubcategorie, updateSubcategorie} = require("../controllers/subcategorie");
const { validarCampos } = require("../middlewares/validar-campos");


const router = Router();

router.post("/", getSubcategories);
router.post("/newCategorie",
  [check("name", "Envíe el nombre de la subcategoria").not().isEmpty(), validarCampos],
  newSubcategorie
);
router.put("/", updateSubcategorie);

module.exports = router;