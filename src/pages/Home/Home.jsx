import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import Treatment from './Treatment';


const Home = () => {
    return (
        <div className='px-10'>
            <Banner />
            <Info />
            <Service />
            <Treatment />
        </div>
    );
};

export default Home;