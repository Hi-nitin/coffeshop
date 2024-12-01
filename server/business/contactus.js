const ContactForm=require('../schema/contactus')
const { validationResult } = require('express-validator');
const contactus = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
        const { name, email, message } = req.body;

        // Validate the data
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new contact form entry
        const newForm = new ContactForm({
            name,
            email,
            message,
        });

        // Save to the database
        await newForm.save();

        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
        console.error('Error saving contact form:', err);
        res.status(500).json({ error: 'An error occurred while submitting the form.' });
    }
}

module.exports=contactus