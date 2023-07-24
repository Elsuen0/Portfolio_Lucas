import React from 'react';
import './Carrousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carrousel = ({ projects }) => {
    return (
        <div>
            <Swiper
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className='slider'> <img src={project.image} alt={project.title} className='slider-img' /> <h2>{project.title}</h2></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carrousel;