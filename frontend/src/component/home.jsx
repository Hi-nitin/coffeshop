import './home.css'
import { useEffect } from 'react';
import Section1 from './home-sub-component/section1';
import Section2 from './home-sub-component/section2';
import Section3 from './home-sub-component/section3'
import Section4 from './home-sub-component/section4';
import Section6 from './home-sub-component/section6';
import Section5 from './home-sub-component/section5';
import Footer from './home-sub-component/footer';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

const home = () => {

  useEffect(() => {
    socket.on('fog', () => {
        console.log('tggggg');
        
    });

    return () => {
        socket.off('fog');
    };
}, []);
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />

    </>
  )
}

export default home;