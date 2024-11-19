import { useEffect, useState } from 'react';
import './home.css'
import Navbar from "./navbar";

const home = () => {

  const [ouritems, setouritem] = useState(null);
  const [loadingitem, setloadingitem] = useState('')
  useEffect(() => {

    const getItem = async () => {
      try {

        const response = await fetch('http://localhost:3000/ouritem');
        const result = await response.json();
        setouritem(result.message)
        setloadingitem('none')
      } catch (ex) {

        console.log(ex);

      }

    }
    getItem()
  }, []);
  return (
    <>
      <div className="main">
        <Navbar />
        <div className='crop'>
          <h1 className="coffee-heading">From Crop To Cup</h1>

          <p className='coffee-paragraph'>Himalayan Java coffee Beans are grown locally and are </p>
          <p className='coffee-paragraph'>roasted to perfection in the ideal Himalayan air. It is then</p>
          <p className='coffee-paragraph'>packaged immediately and rushed off to our outlets which</p>
          <p className='coffee-paragraph'>ensures we deliver the best coffee experience possible for </p>
          <p className='coffee-paragraph'>all of our customers. </p>

          <button className='seemenu'>See Menu</button>
        </div>

      </div>

      <section className="services-section">
        <div className="services-left">
          <h2>Our Services</h2>
          <p>Himalayan Java offers its customers the best-tasting </p><p>coffee beverage in the country. We have achieved</p><p> this using high-quality ingredients and strictly </p><p>following preparation guidelines.</p>
          <button className="contactusbtn">Contact Us</button>
        </div>
        <div className="services-right">
          <div className="top-row">
            <div className="service">
              <img src="/Screenshot 2024-11-11 025557.png" alt="Deep Earth" />
              <h3>Nepali coffee Beans</h3>
              <p>Himalayan Java offers its customers </p><p>with locally brewed taste.</p>
            </div>
            <div className="service">
              <img src="/Screenshot 2024-11-11 025927.png" alt="Night Arcade" />
              <h3>Nepali coffee Beans</h3>
              <p>Himalayan Java offers its customers </p><p>with locally brewed taste.</p>

            </div>
          </div>
          <div className="bottom-row">
            <div className="service">
              <img src="Screenshot 2024-11-11 025950.png" alt="Soccer Team VR" />
              <h3>Nepali coffee Beans</h3>
              <p>Himalayan Java offers its customers </p><p>with locally brewed taste.</p>

            </div>
            <div className="service">
              <img src="Screenshot 2024-11-11 030004.png" alt="The Grid" />
              <h3>Nepali coffee Beans</h3>
              <p>Himalayan Java offers its customers </p><p>with locally brewed taste.</p>

            </div>
          </div>
        </div>
      </section>


      <div className='findus-section'>


        <div className='centerfind'>
          <h1>Find Us</h1>
          <p>Himalayan Java outlets are available within the best</p><p>coffee throughout the major cities of Nepal.</p>

        </div>


        <div className='location'>


          <div className='imgsection'>

            <div className='details'>
              <img className="myimg" src='/patandurbar.jpg' />
              <div className='placename'>
                <h2>Patan Durbar Square</h2>
              </div>
            </div>

            <div className='details'>
              <img className="myimg" src='/pok.jpeg' />
              <div className='placename'>
                <h2>Lakeside, Pokhara</h2>
              </div>
            </div>

            <div className='details'>
              <img className="myimg" src='/mandala.jpeg' />
              <div className='placename'>
                <h2>Mandala Street</h2>
              </div>
            </div>

            <div className='details'>
              <img className="myimg" src='/namchebazar.jpeg' />
              <div className='placename'>
                <h2>Namche Bazar</h2>
              </div>
            </div><div className='details'>
              <img className="myimg" src='/boudhanath-stupa.jpg' />
              <div className='placename'>
                <h2>Boudhanath Stupa</h2>
              </div>
            </div>

            <div className='details'>
              <img className="myimg" src='/pashupati.jpeg' />
              <div className='placename'>
                <h2>Pashupatinath Marga</h2>
              </div>
            </div>

            <div className='details'>
              <img className="myimg" src='/thamel.jpeg' />
              <div className='placename'>
                <h2>Thamel</h2>
              </div>
            </div>

            <div className='details'>
              <img className="myimg" src='/basantapur.jpeg' />
              <div className='placename'>
                <h2>Basantapur</h2>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="menusection">

        <div className='menu-details'>
          <h1>MENU</h1>
          <p>While most of the food in our menu changes from kitchen to kitchen and </p><p>from cook to cook ,what remains the same in our product from the bakery.</p>
        </div>

        <div className='menu-items-container'>


          {ouritems &&

            ouritems.map((val) => {
              return (
                <>
                  <div className='menu-item'>
                    <img className="item-img" src={`http://localhost:3000/uploads/${val.itemPic}`} />
                    <div className='nameprice'>
                      <p>{val.itemName}</p>
                      <p id='price'>{val.itemPrice}</p>
                    </div>
                  </div>
                </>
              )

            })
          }

        
       




        </div>
      </div>
    </>
  )
}

export default home;