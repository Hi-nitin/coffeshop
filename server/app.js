const express = require('express');
const app = express();
const PORT =3000;
const cors = require('cors');
const DB_CONN=require('./database/connection');
app.use(cors());
const path=require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const router=require('./router/router')


app.use('/',router)


DB_CONN();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
