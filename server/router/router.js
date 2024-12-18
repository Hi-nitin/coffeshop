const express = require('express');
const router = express.Router();
const itemUpload = require('../business/itemUpload')
const multer = require('multer');
const path = require('path');
const ouritem = require('../business/ouritem')
const selecteditem = require('../business/myselecteditem')
const placeorder = require('../business/placeorder')
const signup_B = require('../business/signup')
const signup_V = require('../validator/signup')
const signup_M = require('../middleware/signup')
const login_B = require('../business/login')
const login_V = require('../validator/login')
const login_M = require('../middleware/login')
const orderdetail = require('../business/customerorder')
const ordercompleted = require('../business/ordercompleted');
const tokenverify = require('../middleware/tokenverify')
const myorder = require('../business/myorder');
const deleteitem = require('../business/deleteitem')
const modifyitem = require('../business/modifyitem')
const contactus = require('../business/contactus')
const contactus_v = require('../validator/contactus')
const addplace = require('../business/add-place');
const multerforaddplace=require('../multer/addplace')
const fetchplace=require('../business/fetch-place')
const placedetail=require('../business/placedetail')

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
router.get('/ouritem', ouritem);
router.post('/myselecteditem', selecteditem);
router.post('/placeorder', placeorder)
router.post('/signup', signup_V, signup_M, signup_B)
router.post('/login', login_V, login_M, login_B)
router.get('/customerorder', orderdetail)
router.put('/completeorder', ordercompleted)
router.get('/myorder', tokenverify, myorder)
router.delete('/ouritem/:id', deleteitem)
router.put('/ouritem/:id', modifyitem)
router.post('/contact', contactus_v, contactus)
router.get('/place/:id',placedetail)
router.get('/fetchplace',fetchplace)
router.post('/addplaces', multerforaddplace.single('picture'), addplace);


module.exports = router;
