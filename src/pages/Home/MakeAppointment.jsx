import React from 'react';
import appointment from "../../assets/images/appointment.png"
import doc from "../../assets/images/doctor.png"
import PrimaryButton from '../Extra/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            backgroundImage: `url(${appointment})`,
        }} className='flex justify-center items-center mt-48'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doc} alt="" />
            </div>
            <div className='p-10 lg:flex-1'>
                <h4 className='text-xl text-secondary mb-5'>Appointment</h4>
                <h2 className='text-white text-4xl mb-5'>Make an appointment Today</h2>
                <p className='text-white text-lg mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>

        </section>
    );
};

export default MakeAppointment;