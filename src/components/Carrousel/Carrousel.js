import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '10%',
                },
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '5%',
                },
            },
        ],
    };

    const slides = [
        {
            id: 1,
            title: 'Slide 1',

        },
        {
            id: 2,
            title: 'Slide 2',

        },
        {
            id: 3,
            title: 'Slide 3',

        },
    ];

    return (
        <Slider {...settings}>
            {slides.map((slide) => (
                <div key={slide.id}>
                    <h2>{slide.title}</h2>
                    <img src={slide.image} alt={slide.title} />
                </div>
            ))}
        </Slider>
    );
};

export default Carrousel;
