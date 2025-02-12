import Navbar from '../navbar';

const Section1 = () => {
  // Function to handle scrolling to Section4
  const scrollToMenu = () => {
    const section4 = document.getElementById("section4");
    if (section4) {
      section4.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="main">
        <Navbar />
        <div className="crop">
          <h1 className="coffee-heading">From Crop To Cup</h1>

          <p className="coffee-paragraph">Himalayan Java coffee Beans are grown locally and are</p>
          <p className="coffee-paragraph">roasted to perfection in the ideal Himalayan air. It is then</p>
          <p className="coffee-paragraph">packaged immediately and rushed off to our outlets which</p>
          <p className="coffee-paragraph">ensures we deliver the best coffee experience possible for</p>
          <p className="coffee-paragraph">all of our customers.</p>

          <button className="seemenu" onClick={scrollToMenu}>See Menu</button>
        </div>
      </div>
    </>
  );
};

export default Section1;
