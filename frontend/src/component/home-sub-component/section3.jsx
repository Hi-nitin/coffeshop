import React, { useState, useEffect } from 'react';
import axios from 'axios';

const section3 = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3000/fetchplace')
      .then(response => {
        setPlaces(response.data);
        setLoading(false);
        console.log(response.data);
        
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [])
  return (
    <>
      <div className='findus-section'>


        <div className='centerfind'>
          <h1>Find Us</h1>
          <p>Himalayan Java outlets are available within the best</p><p>coffee throughout the major cities of Nepal.</p>

        </div>


        <div className='location'>


          <div className='imgsection'>

{places && places.map((val)=>{
return(

  <>
          <div className='details'>
              <img className="myimg" src={`http://localhost:3000/placeuploads/${val.picture}`} />
              <div className='placename'>
                <h2>{val.name}</h2>
              </div>
            </div>
  </>
)
})}
  

           

          </div>

        </div>
      </div>


    </>

  )
}

export default section3;