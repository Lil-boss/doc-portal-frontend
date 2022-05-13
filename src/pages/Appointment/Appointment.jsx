import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from "../../assets/images/chair.png"
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div class="p-32">
                        <DayPicker
                            className='font-bold text-sm rounded-lg shadow-lg '
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                </div>
            </div>
            <div className='text-center test-xl text-secondary mb-24'>
                <h3>Available Appointments on {format(selected, 'PP')}</h3>
            </div>
            <div className='w-4/5 mx-auto'>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        services.map(service => <AppointmentCard key={service._id}
                            name={service.name}
                            slots={service.slots}
                        />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Appointment;