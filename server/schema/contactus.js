const mongoose = require('mongoose');
const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /\S+@\S+\.\S+/
    },
    message: {
        type: String,
        required: true
    },
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports=ContactForm