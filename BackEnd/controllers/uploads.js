const { response } = require("express");
const Product = require("../models/product");
const multer = require("multer");
const configMulter = require("../helpers/uploads");
const fs = require("fs");
const path = require("path");

const uploadFiles = async (req, res = response, next) => {
  const upload = multer(configMulter).single("file");
  upload(req, res, async (error) => {
    if (!error) {
      return res.json({ file: req.file.filename });
    } else {
      console.log(error);
      return next();
    }
  });
};

const uploadMultipleFiles = async (req, res) => {
  const id = req.params.id;
  const upload = multer(configMulter).array("file");
  upload(req, res, async (error) => {
    console.log(req.files)
    const array = [];
    const fileName = req.files.map((file) => {
      array.push(file.filename);
    });
    const body = {
      img: array,
    };
    const productUploadImage = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!error) {
      return res.json({ product: productUploadImage });
    } else {
      console.log(error);
      return next();
    }
  });
};

const getImages = async (req, res) => {
  const file = req.params.image;
  const pathFile = `./uploads/${file}`;
  const url = `C:/Users/Jaison%20Palacio/Desktop/4to%20a%C3%B1o/Desarrollo%209/GeekyDroop/BackEnd/uploads/${file}`


  if (fs.existsSync(pathFile)) {
    // return res.json({img:path.resolve(pathFile),
    // url: url});
    return res.sendFile(path.resolve(pathFile))
  } else {
    return res.json({ msg: "el no existe" });
  }
};

module.exports = {
  uploadFiles,
  uploadMultipleFiles,
  getImages,
};
