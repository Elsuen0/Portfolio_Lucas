import React from 'react';
import './Services.scss';

const Services = ({ services }) => {
    return (
        <div className='serviceGroup'>
            {services.map((service) => (
                <div className='serviceCard' key={service.id}>
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