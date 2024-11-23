const express = require('express');
const router = express.Router();
const itemUpload=require('../business/itemUpload')
const multer=require('multer');
const path = require('path');
const ouritem=require('../business/ouritem')
const selecteditem=require('../business/myselecteditem')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage });

router.post('/users', upload.single('itemPic'), itemUpload);
router.get('/ouritem',ouritem);
router.post('/myselecteditem',selecteditem);



module.exports = router;
