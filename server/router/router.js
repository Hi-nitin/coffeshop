const express = require('express');
const router = express.Router();
const itemUpload=require('../business/itemUpload')
const multer=require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage });

router.post('/users', upload.single('itemPic'), itemUpload)



module.exports = router;
