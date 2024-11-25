const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const DB_CONN = require('./database/connection');
const appsocket=require('./socket/socket')
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

const cookieParser = require('cookie-parser');
const http = require('http');
const path = require('path')
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());
const server = http.createServer(app);

appsocket(server)


const router = require('./router/router')


app.use('/', router)


DB_CONN();
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
