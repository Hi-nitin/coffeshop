import './aboutus.css';
import Navbar from "./navbar2";
import Footer from './home-sub-component/footer';
import Section6 from './home-sub-component/section6';
const aboutus = () => {
    return (
        <>
            <Navbar />

            <div className="section1">

                <h1>Since 1999</h1>
            </div>


            <div className='section2'>
                <p>Since 1999, we’ve proudly been offering Nepali coffee, pioneering the concept of Specialty Coffee, Third Wave Coffee, and Sustainable Coffee in Nepal. Our unwavering mission has been to provide our customers with the finest coffee. Rooted in our commitment to socially responsible entrepreneurship, we prioritize investing in people, from coffee growers to coffee lovers</p>
            </div>

            <div className='section3'>

                <div className='forimg'>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WE9zOPo40GeHR_us2Z1aucln9G2-jY3dIA&s' />
                </div>

                <div className='fordescription'>

                    <h1>Our Missions</h1>
                    <p>With a strong core belief of socially responsible</p>
                    <p> entrepreneurship, our mission is to promote the</p>
                    <p> fledgling Nepalese coffee industry by investing in </p>
                    <p>people from grower to consumer and to create </p>
                    <p>awareness of promoting Nepalese coffee domestically </p>
                    <p>and in an international niche market.</p>

                </div>
            </div>


            <div className='section4'>
                <h1>Meet our Team</h1>
                <div className='img-container'>

                    <div className='name'>
<img src='data:image/jpeg;base64,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' />

<p>Gagan pradhan</p>
<p>Brewing Founder</p>
                    </div>

                    
                    <div className='name'>


               
                   
                    <img src='data:image/jpeg;base64,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' />
                    <p>Gagan pradhan</p>
                    <p>Brewing Founder</p>
                    </div>
                
                </div>
            </div>
            <div className='sec6'>
            <Section6/>
            </div>
         
            <Footer/>
        </>
    )
}

export default aboutus;