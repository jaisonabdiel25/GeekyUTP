const multer = require("multer");
const shortid = require("shortid");

const configMulter = {
  limits: { fileSize: 100000000 },
  storage: (fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "/../uploads");
      // cb(null, __dirname + "../../front-geeky/public/uploads");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
};

module.exports = configMulter;
