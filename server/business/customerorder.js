const orderschema = require('../schema/orderdetailschema')
const customerorder = async (req, res) => {

    try {

        const getorder = await orderschema.find().populate('item_id orderedby');
        console.log(getorder);


    } catch (ex) {
        console.log(ex);

    }

}

module.exports = customerorder;