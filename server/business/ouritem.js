const itemuploadschema = require('../schema/itemuploadschema')
const ouritem = async (req, res) => {

    try {

        const items = await itemuploadschema.find();

        res.status(200).json({ message: items });

    } catch (ex) {

        res.status(400).json({
            error: 'server error'
        })
    }


}

module.exports = ouritem;