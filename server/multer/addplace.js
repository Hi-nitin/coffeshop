const multer = require('multer');
const path = require('path');
const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'placeuploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload2 = multer({ storage: storage2 });
  module.exports=upload2