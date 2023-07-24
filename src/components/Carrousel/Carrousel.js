import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carrousel.scss'

const Carrousel = ({ projects }) => {

    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: "25%",
        infinite: true,
        slidesToShow: 1,
        slideToScroll: 1,
        speed: 500,
        focusOnSelect: true,
    };

    return (
        <div>
            <Slider {...settings}>
                {projects.map((project) => (
                    <div key={project.id} className='slide'>
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carrousel;