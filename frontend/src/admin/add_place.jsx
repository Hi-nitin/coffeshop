import React, { useState } from 'react';
import axios from 'axios';

function addplace() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    telephone: '',
    email: '',
    picture: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      picture: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('telephone', formData.telephone);
    formDataToSend.append('email', formData.email);
    if (formData.picture) {
      formDataToSend.append('picture', formData.picture);
    }

    try {
      await axios.post('http://localhost:3000/addplaces', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Place saved successfully!');
      setFormData({
        name: '',
        description: '',
        location: '',
        telephone: '',
        email: '',
        picture: null
      });
    } catch (err) {
      console.error('Error saving place:', err);
      alert('Error saving place.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name of Place</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Telephone</label>
        <input
          type="text"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Picture</label>
        <input
          type="file"
          name="picture"
          onChange={handleFileChange}
        />
      </div>

      <button type="submit">Save Place</button>
    </form>
  );
}

export default addplace;
