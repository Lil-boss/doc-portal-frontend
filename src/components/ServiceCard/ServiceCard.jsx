import React from 'react';

const ServiceCard = ({ title, content, icon }) => {
    return (
        <div className="card mx-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl w-[116px] h-[115px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default ServiceCard;