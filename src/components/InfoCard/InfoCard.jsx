import React from 'react';

const InfoCard = ({ title, content, icon, color }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${color}`
        }>
            <figure>
                <img className='lg:ml-4 pt-4' src={icon} alt="" />
            </figure>
            <div className="card-body text-white" >
                <h2 className="card-title" > {title}</h2 >
                <p>{content}</p>
            </div >
        </div >
    );
};

export default InfoCard;