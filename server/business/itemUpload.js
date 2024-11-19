const ItemSchema = require('../schema/itemuploadschema');

const itemUpload = async (req, res) => {
    try {
        const { itemName, itemPrice } = req.body;
        const itemPic = req.file ? req.file.path : null;

        if (!itemName || !itemPrice || !itemPic) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newItem = new ItemSchema({
            itemName,
            itemPrice,
            itemPic,
        });

        await newItem.save();
        res.status(201).json({ message: 'Item uploaded successfully', item: newItem });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }

}

module.exports = itemUpload;