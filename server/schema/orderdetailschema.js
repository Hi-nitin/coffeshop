const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemorderschema = new Schema({
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    orderedby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserRegister',
        required: true,
    },
    status: {
        type: String,
        default: 'pending', 
    }

});

const Ordered = mongoose.model('customer_order', itemorderschema);
module.exports = Ordered;
