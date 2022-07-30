/*
    Ruta: /api/categorie
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getCategories, newCategorie, updateCategorie} = require("../controllers/categories");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/", getCategories);
router.post("/",
  [check("name", "Envíe el nombre de la categoria").not().isEmpty(), validarCampos],
  newCategorie
);
router.put("/", updateCategorie);

module.exports = router;