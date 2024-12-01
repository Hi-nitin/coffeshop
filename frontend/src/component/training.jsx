import './training.css'

import Navbar from "./navbar2";
import Footer from './home-sub-component/footer';
import Section6 from './home-sub-component/section6';
const aboutus = () => {
    return (
        <>
            <Navbar />

            <div className="section-1">

                <h1 style={{color:'white'}}>Barista Training</h1>
            </div>


            <div className='section-2'>
                <p>Himalayan Java Barista Coffee School was introduced to create competent baristas that would be the backbone of the coffee culture in</p>
                <p>Nepal</p>

                <p>Our training sessions lead students through lectures
                    and demonstrations followed by hands-on practice.
                    To ensure every student gets one-to-one mentorship,
                    the course is catered to a small batch of individuals
                    at a time.  As a requirement of the course, the
                    students are provided an internship at the Himalayan
                    Java outlets. We believe our training course allows
                    students to experience what it takes to be a
                    barista while facilitating them in discovering the wonderful world of coffee.</p>
            </div>

            <div className='section-3'>

                <div className='forimg'>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WE9zOPo40GeHR_us2Z1aucln9G2-jY3dIA&s' />
                </div>

                <div className='fordescription'>

                    <div id='first'>

                        <h3>About Courses</h3>
                        <p>Course duration of 15 days (3 hours/day)</p>
                        <p> 70% of Barista Training is based on practical training</p>
                        <p> COMPREHENSIVE COFFEE MAKING TRAINING</p>
                    </div>
<div id='second'>

<ul>
                        <li>A brief History of Coffee</li>
                        <li>Coffee Beans</li>
                        <li>Roasting and Blending</li>
                        <li>Espresso Equipment</li>
                        <li>Extracting Perfect Espresso</li>
                        <li>The Art of Steaming and Foaming Milk</li>
                        <li>Cleaning, Safety & Maintenance</li>
                        <li>Customer Service</li>
                        <li>Occupational Health & Safety</li>

                    </ul>

</div>

              
                </div>
            </div>



            <div className='sec6'>
                <Section6 />
            </div>

            <Footer />
        </>
    )
}

export default aboutus;