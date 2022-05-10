import React from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"
const Info = () => {
    const info = [
        {
            _id: 1,
            title: "opening hours",
            content: "Mon-Fri: 9am - 5pm",
            icon: clock,
            color: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            _id: 2,
            title: 'Our Location',
            content: "new york, ny",
            icon: marker,
            color: "bg-accent"
        },
        {
            _id: 3,
            title: "Contact Us now",
            content: "123-456-7890",
            icon: phone,
            color: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {info.map(item => <InfoCard key={item._id} title={item.title} content={item.content} color={item.color} icon={item.icon} />)}
        </div>
    );
};

export default Info;