import React, { useEffect } from 'react';
import './Services.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = ({ services }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='serviceGroup'>
            {services.map((service, index) => (
                <div
                    className='serviceCard'
                    key={service.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}>
                    <div className='background_img'>
                        <img src={service.image} alt={service.title} />
                    </div>
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;