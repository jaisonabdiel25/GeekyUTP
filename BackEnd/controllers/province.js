const { response } = require("express");
const Province = require("../models/province");

const getProvinces = async (req, res = response) => {
  const province = await Province.find();

  res.json({
    ok: true,
    province,
  });
};

const newProvince = async (req, res = response) => {
  const { name } = req.body;

  const provinceExist = await Province.findOne({ name });
  if (provinceExist) {
    return res.status(400).json({
      ok: false,
      msg: "La provincia ya existe",
    });
  }

  try {
    const provinceDB = new Province(req.body);

    await provinceDB.save();
    res.json({
      ok: true,
      provinceDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

const updateProvince = async (req, res = response) => {
  const uid = req.params.id;

  try {
    const provinceDB = await Province.findById(uid);
    if (!provinceDB) {
      return res.status(404).json({
        ok: false,
        msg: "La Provincia no existe",
      });
    }

    const body = {
      name: req.name,
    };

    const provinceUpdate = await Province.findByIdAndUpdate(uid, body, {
      new: true,
    });

    res.json({
      ok: true,
      provinceUpdate,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

module.exports = {
  getProvinces,
  newProvince,
  updateProvince,
};
