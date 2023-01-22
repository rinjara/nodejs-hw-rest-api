const multer = require('multer');
const path = require('path');

const multerConfig = multer.diskStorage({
  destination: path.join(__dirname, '../', '../', 'temp'),
  filename: (req, file, cb) => {
    const [fileName, extension] = file.originalname.split('.');
    cb(null, `${fileName}.${extension}`);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
