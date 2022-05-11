import React from 'react';

const TestimonialCard = ({ name, content, avatar }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{content}</p>
                <div className='flex justify-center items-center'>
                    <div class="avatar">
                        <div class="w-[75px] h-[75px] rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 mt-9">
                            <img src={avatar} alt="" />
                        </div>
                    </div>
                    <div className='ml-4 mt-6'>
                        <h1 className='text-xl'>{name}</h1>
                        <h1>California</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;