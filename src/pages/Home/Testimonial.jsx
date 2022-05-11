import React from 'react';
import quote from "../../assets/icons/quote.svg"
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import person1 from "../../assets/images/people1.png"
import person2 from "../../assets/images/people2.png"
import person3 from "../../assets/images/people3.png"
const Testimonial = () => {
    const testimonial = [
        {
            _id: 1,
            name: "John Doe",
            content: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            avatar: person1
        },
        {
            _id: 2,
            name: "he Doe",
            content: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            avatar: person2
        },
        {
            _id: 3,
            name: "mary",
            content: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            avatar: person3
        },
    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-secondary mb-2'>Testimonial</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-[192px] h-[156px]' src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-20">
                {
                    testimonial.map((item) => <TestimonialCard key={item._id}
                        name={item.name}
                        content={item.content}
                        avatar={item.avatar}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonial;