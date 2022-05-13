import { format } from 'date-fns';
import React from 'react';
const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className='mt-3'>
                        <form className='grid grid-cols-1 gap-4 justify-items-center'>
                            <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
                            <select class="select select-bordered w-full max-w-xs">
                                {
                                    slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
                                }
                            </select>
                            <input type="text" placeholder="Name" class="input input-bordered input-sm w-full max-w-xs" />
                            <input type="text" placeholder="Email" class="input input-bordered input-sm w-full max-w-xs" />
                            <input type="text" placeholder="Phone number" class="input input-bordered input-sm w-full max-w-xs" />

                            <input className="btn btn-secondary w-2/3 text-white" value="submit" type="submit" />
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default BookingModal;