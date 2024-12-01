const { check } = require('express-validator');

const contactValidator = [
  // Validate 'name' field: it should not be empty
  check('name')
    .notEmpty().withMessage('Name is required')
    .trim(),

  // Validate 'email' field: it should be a valid email address
  check('email')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),

  // Validate 'message' field: it should not be empty
  check('message')
    .notEmpty().withMessage('Message is required')
    .trim(),
];

module.exports = contactValidator;
