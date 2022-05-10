import React from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import fluoride from "../../assets/images/fluoride.png"

const Service = () => {
    const services = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            content: "lorem ipsum dolor sit amet eslint-disable-next-line",
            icon: fluoride,
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            content: "lorem ipsum dolor sit amet eslint-disable-next-line",
            icon: cavity,
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            content: "lorem ipsum dolor sit amet eslint-disable-next-line",
            icon: whitening,
        }
    ]
    return (
        <div className='mt-32'>
            <div className='text-center mb-7'>
                <h3 className='text-xl text-secondary'>Our service</h3>
                <h3 className='text-3xl font-light'>Services We Provide</h3>
            </div>
            <div className='grid lg:grid-cols-3 gap-4'>
                {services.map(item => <ServiceCard key={item._id} title={item.title} content={item.content} icon={item.icon} />)}
            </div>

        </div>
    );
};

export default Service;