const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {

    const token = req.cookies['token'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.userId = decoded.userId;
        req.cat = 'gem';

        next();
    });
};

module.exports = verifyToken;