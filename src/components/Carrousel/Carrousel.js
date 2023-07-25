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
                slidesPerView={1.5}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                modules={[Pagination, Navigation]}>
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className='slider'> <img src={project.image} alt={project.title} className='slider-img' /> <h2>{project.title}</h2></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carrousel;