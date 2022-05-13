import React from 'react';
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Extra/PrimaryButton';
const Contact = () => {
    return (
        <section style={{
            backgroundImage: `url(${appointment})`,
        }} className="h-[600px] mt-28">
            <div className='max-w-lg mx-auto text-center pt-20'>
                <h4 className='text-xl text-secondary'>Contact Us</h4>
                <h1 className='text-4xl text-white mt-2 mb-10'>Stay connect with us</h1>
                <form>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-5" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-5" />
                    <textarea className="textarea textarea-bordered h-24 w-80 mb-9" placeholder="Bio"></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section >
    );
};

export default Contact;