import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './placedetail.css';  // Import the CSS file
import Navbar from './navbar2'

const PlaceDetails = () => {
  const { id } = useParams(); // Get the place ID from the URL
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the place details by ID
    axios.get(`http://localhost:3000/place/${id}`)
      .then(response => {
        setPlace(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (

   <>
   <Navbar/>
   <div className="place-details">
      <div className="image-container">
        <img src={`http://localhost:3000/placeuploads/${place.picture}`} alt={place.name} />
      </div>

      <div className="details-container">
        <h1>{place.name}</h1>

        <div className="place-info">
          <h2>Details:</h2>
          <p>{place.description}</p>
        </div>

        <div className="contact-info">
          <p><strong>Location:</strong> {place.location}</p>
          <p><strong>Telephone:</strong> {place.telephone}</p>
          <p><strong>Email:</strong> {place.email}</p>
        </div>
      </div>
    </div>
   </>
  );
}

export default PlaceDetails;
