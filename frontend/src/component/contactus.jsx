import React, { useState } from 'react';
import './ContactUs.css'; // Ensure the CSS file is imported
import Navbar from './navbar2';
const ContactUs = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to hold validation errors from the backend
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to hold submission status
  const [submitStatus, setSubmitStatus] = useState('');

  // Handle input changes and update the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors and submission status on each submit attempt
    setErrors({
      name: '',
      email: '',
      message: '',
    });
    setSubmitStatus('Submitting...');

    try {
      // Send form data to the backend
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Get the response data
      const data = await response.json();

      // Handle validation errors if they exist
      if (response.status === 200) {
        setSubmitStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
      } else {
        // Map errors to their respective fields
        const fieldErrors = {};
        data.errors.forEach((error) => {
          fieldErrors[error.param] = error.msg;
        });
        setErrors(fieldErrors); // Set the errors state
        setSubmitStatus('There were errors in your form submission.');
      }
    } catch (error) {
      setSubmitStatus('Error: Unable to submit form.');
    }
  };

  return (
    
   <>
   <Navbar/>
   <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitStatus && <p>{submitStatus}</p>}
    </div>
   </>
  );
};

export default ContactUs;
