import React from 'react';
import Footer from '../Extra/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Testimonial from './Testimonial';
import Treatment from './Treatment';


const Home = () => {
    return (
        <div className='px-10'>
            <Banner />
            <Info />
            <Service />
            <Treatment />
            <MakeAppointment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;