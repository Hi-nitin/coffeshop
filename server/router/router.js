const express = require('express');
const router = express.Router();
const itemUpload=require('../business/itemUpload')
const multer=require('multer');
const path = require('path');
const ouritem=require('../business/ouritem')
const selecteditem=require('../business/myselecteditem')
const placeorder=require('../business/placeorder')
const signup_B=require('../business/signup')
const signup_V=require('../validator/signup')
const signup_M=require('../middleware/signup')
const login_B=require('../business/login')
const login_V=require('../validator/login')
const login_M=require('../middleware/login')
const orderdetail=require('../business/customerorder')
const ordercompleted=require('../business/ordercompleted')

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
router.post('/placeorder',placeorder)
router.post('/signup',signup_V,signup_M,signup_B)
router.post('/login',login_V,login_M,login_B)
router.get('/customerorder',orderdetail)
router.put('/completeorder',ordercompleted)


module.exports = router;
