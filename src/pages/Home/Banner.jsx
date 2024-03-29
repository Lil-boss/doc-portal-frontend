import React from 'react';
import banner from "../../assets/images/chair.png"
import PrimaryButton from '../Extra/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            < div className="hero-content flex-col lg:flex-row-reverse" >
                <img className='lg:w-[594px] lg:h-[355px]' src={banner} alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6" > Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p >
                    <PrimaryButton>Get Started</PrimaryButton>
                </div >
            </div >
        </div >
    );
};

export default Banner;