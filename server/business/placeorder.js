const jwt = require('jsonwebtoken')
const orderdetailschema = require('../schema/orderdetailschema')
const placeorder = async (req, res) => {
    const { ordereditem, quantity } = req.body;
    try {

        const token = req.cookies['token'];

        if (token) {

            try {
                const decoded = jwt.verify(token, 'key');
                console.log(decoded);
                console.log(ordereditem, quantity);
                try {
                    const saveorder = new orderdetailschema({
                        item_id: ordereditem,
                        quantity: quantity,
                        orderedby: decoded.userId
                    });

                    const savedata = await saveorder.save();
                    res.json({ message: 'order placed' })

                } catch (ex) {
                    console.log(ex);

                }

            } catch (ex) {
                res.json({ message: 'token verification failed' })
            }

        } else {
            res.json({ message: 'invalid token' })
        }

    } catch (err) {

        console.log('Error getting token. please login again.');
    }

}

module.exports = placeorder;