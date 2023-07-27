import React, { useEffect, useRef } from 'react';
import './Carrousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carrousel = ({ projects }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;

        function updateSlidesPerView() {
            const newSlidesPerView = getSlidesPerView();
            if (swiperInstance.params.slidesPerView !== newSlidesPerView) {
                swiperInstance.params.slidesPerView = newSlidesPerView;
                swiperInstance.update();
            }
        }

        function getSlidesPerView() {
            return window.matchMedia('(max-width: 768px)').matches ? 1 : 1.5;
        }

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);
    return (
        <div>
            <Swiper
                ref={swiperRef}
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