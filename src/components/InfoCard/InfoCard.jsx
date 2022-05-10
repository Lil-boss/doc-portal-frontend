import React from 'react';

const InfoCard = ({ title, content, icon, color }) => {
    return (
        <div class={`card lg:card-side shadow-xl ${color}`}>
            <figure><img className='ml-4' src={icon} alt="" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default InfoCard;