const { response } = require("express");
const Subcategorie = require("../models/subcategorie");

const getSubcategories = async (req, res = response) => {
  const id = req.body.id;

  const subcategorie = await Subcategorie.find({'categorie': id}).populate("categorie", "name");

  res.json({
    ok: true,
    subcategorie
  });
};

const newSubcategorie = async (req, res = response) => {
  const { name } = req.body;

  const subcategorieExist = await Subcategorie.findOne({ name });
  if (subcategorieExist) {
    return res.status(400).json({
      ok: false,
      msg: "La subcategoria ya existe",
    });
  }

  try {
    const subcategorieDB = new Subcategorie(req.body);

    await subcategorieDB.save();

    console.log(subcategorieDB)
    res.json({
      ok: true,
      subcategorieDB
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

const updateSubcategorie = async (req, res = response) => {
  const uid = req.params.id;

  try {
    const subcategorieDB = await Province.findById(uid);
    if (!subcategorieDB) {
      return res.status(404).json({
        ok: false,
        msg: "La subcategoria no existe",
      });
    }

    const body = {
      name: req.name,
    };

    const subcategorieUpdate = await Subcategorie.findByIdAndUpdate(uid, body, {
      new: true,
    });

    res.json({
      ok: true,
      subcategorieUpdate,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

module.exports = {
    getSubcategories,
    newSubcategorie,
    updateSubcategorie,
};