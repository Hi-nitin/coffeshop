const orderschema = require('../schema/orderdetailschema');

const customerorder = async (req, res) => {
    try {

        const getorder = await orderschema.find({ status: 'pending' }).populate('item_id orderedby');

        if (getorder.length !== 0) {
            res.json({ message: getorder });
        } else {
            res.json({ message: 'empty' });
        }
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ message: 'Error fetching orders', error: ex.message });
    }
}

module.exports = customerorder;
