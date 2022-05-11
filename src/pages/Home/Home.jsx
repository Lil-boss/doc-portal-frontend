import React from 'react';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;