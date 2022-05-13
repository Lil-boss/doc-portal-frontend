import React from 'react';
import PrimaryButton from '../../pages/Extra/PrimaryButton';

const AppointmentCard = ({ name, slots }) => {
    return (
        <div class="card max-w-md bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-secondary text-xl">{name}</h2>
                <p className='text-center'>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-500 uppercase'>No space available</span>}</p>
                <p className='text-center'>{slots.length}{slots.length > 1 ? ' spaces' : ' space'} available</p>
                <div class="card-actions justify-center">
                    <PrimaryButton>Book appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;