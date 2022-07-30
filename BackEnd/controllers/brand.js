const { response } = require("express");
const Brand = require("../models/brand");

const getBrands = async (req, res = response) => {

  const brand = await Brand.find()

  res.json({
    ok: true,
    brand,
  });
};

const newBrand = async (req, res = response) => {
  const { name } = req.body;

  const brandExist = await Brand.findOne({ name });
  if (brandExist) {
    return res.status(400).json({
      ok: false,
      msg: "La categoria ya existe",
    });
  }
  try {
    const brandDB = new Brand(req.body);

    //Guardar usuario
    await brandDB.save();
    res.json({
      ok: true,
      brandDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

const updateBrand = async (req, res = response) => {
  const uid = req.params.id;

  try {
    const brandDB = await User.findById(uid);
    if (!brandDB) {
      return res.status(404).json({
        ok: false,
        msg: "La categoria no existe",
      });
    }

    const body = {
      name: req.name
    }

    const brandUpdate = await User.findByIdAndUpdate(uid, body, {
      new: true,
    });

    res.json({
      ok: true,
      brandUpdate
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

module.exports = {
  getBrands,
  newBrand,
  updateBrand,
};
