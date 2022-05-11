import React from 'react';
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Extra/PrimaryButton';
const Contact = () => {
    return (
        <section style={{
            backgroundImage: `url(${appointment})`,
        }} className="h-[600px] mb-20 mt-28">
            <div className='w-[450px] h-[400px] absolute left-1/3 mt-24 text-center'>
                <h4 className='text-xl text-secondary'>Contact Us</h4>
                <h1 className='text-4xl text-white mt-2 mb-10'>Stay connect with us</h1>
                <form>
                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs mb-5" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs mb-5" />
                    <textarea class="textarea textarea-bordered h-24 w-80 mb-9" placeholder="Bio"></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default Contact;