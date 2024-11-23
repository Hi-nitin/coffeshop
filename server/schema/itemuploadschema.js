const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    itemPic: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    }
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
