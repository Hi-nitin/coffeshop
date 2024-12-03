import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='place-details'>
      <h1>{place.name}</h1>
      <img src={`http://localhost:3000/placeuploads/${place.picture}`} alt={place.name} />
      <p>{place.description}</p>
      <p><strong>Location:</strong> {place.location}</p>
      <p><strong>Telephone:</strong> {place.telephone}</p>
      <p><strong>Email:</strong> {place.email}</p>
    </div>
  );
}

export default PlaceDetails;
