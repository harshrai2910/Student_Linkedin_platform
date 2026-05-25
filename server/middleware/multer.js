const multer = require("multer");
const path = require("path");

const randomString = (num) => {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < num; i++) {
    result += str[Math.floor(Math.random() * str.length)];
  }

  return result;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `uploads/${req.uploadType}`);
  },
  filename: function (req, file, cb) {
    cb(null, randomString(10) + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;
