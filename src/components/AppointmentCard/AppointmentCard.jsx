import React from 'react';

const AppointmentCard = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card max-w-md bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-secondary text-xl">{name}</h2>
                <p className='text-center'>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-500 uppercase'>No space available</span>}</p>
                <p className='text-center'>{slots.length}{slots.length > 1 ? ' spaces' : ' space'} available</p>
                <div className="card-actions justify-center">
                    <label className="btn bg-gradient-to-r from-primary to-secondary border-none text-white" onClick={() => setTreatment(service)} htmlFor="booking-modal">book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;