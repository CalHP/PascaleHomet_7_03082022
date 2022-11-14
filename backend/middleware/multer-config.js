const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpg": "JPG",
  "image/jpeg": "jpg",
  "image/png": "png",
};

/* Récupération de l'image + création du lien*/
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const extension = MIME_TYPES[file.mimetype];
    const name = file.originalname.split("." + extension).join("_");
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
