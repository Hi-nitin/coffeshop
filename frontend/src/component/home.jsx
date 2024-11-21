import './home.css'
import Navbar from "./navbar";
import Section2 from './home-sub-component/section2';
import Section3 from './home-sub-component/section3'
import Section4 from './home-sub-component/section4';
import Section6 from './home-sub-component/section6';
import Section5 from './home-sub-component/section5';

const home = () => {

 
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

<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>


    </>
  )
}

export default home;