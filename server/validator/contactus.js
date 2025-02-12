const { check } = require('express-validator');

const contactValidator = [
 
  check('name')
    .notEmpty().withMessage('Name is required')
    .trim(),

  
  check('email')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),

  
  check('message')
    .notEmpty().withMessage('Message is required')
    .trim(),
];

module.exports = contactValidator;
