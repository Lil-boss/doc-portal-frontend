import React from 'react';
import banner from "../../assets/images/chair.png"
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='w-[594px] h-[355px]' src={banner} alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-gradient-to-r from-primary to-secondary border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;