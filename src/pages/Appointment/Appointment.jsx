import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from "../../assets/images/chair.png"
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import BookingModal from "../../components/BookingModal/BookingModal"
import Footer from "../Extra/Footer"
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div className="p-32">
                        <DayPicker
                            className='font-bold text-sm rounded-lg shadow-lg '
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div >
            </div >
            <div className='text-center test-xl text-secondary mb-24'>
                <h3>Available Appointments on {format(date, 'PP')}</h3>
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-3 gap-3 mb-20'>
                    {
                        services.map(service => <AppointmentCard key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        />)
                    }
                </div>
                {treatment && <BookingModal treatment={treatment} date={date} />}
            </div>
            <Footer />
        </section >
    );
};

export default Appointment;