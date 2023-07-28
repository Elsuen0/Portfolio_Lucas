import React, { useEffect, useRef, useState } from 'react';
import './Carrousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';


const Carrousel = ({ projects }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [hoveredSlideIndex, setHoveredSlideIndex] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const swiperRef = useRef(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = ''
        }
    }, [isModalOpen])
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

    const handleSlideHover = (index) => {
        setHoveredSlideIndex(index);
    };

    const handleModalOpen = (index) => {
        setSelectedProject(projects[index]);
        setModalOpen(true);
        console.log(selectedProject);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };
    return (
        <div data-aos="fade-up" data-aos-duration="1500">
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
                    {projects.map((project, index) => (
                        <SwiperSlide
                            key={project.id}
                            className='slider'
                            onMouseEnter={() => handleSlideHover(index)}
                            onMouseLeave={() => handleSlideHover(null)}
                            onClick={() => handleModalOpen(index)}>
                            <div className='img_overlay'>
                                <img src={project.image} alt={project.title} className='slider-img' />
                                {hoveredSlideIndex === index && <div className='overlay-carrousel'>
                                    <h1 data-aos='fade-up'>
                                        En savoir plus
                                    </h1>
                                    <FontAwesomeIcon className='arrowRight-carrousel' icon={faArrowRight} data-aos='fade-right' />
                                </div>}
                            </div>
                            <h2>{project.title}</h2>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                className="modal-carrousel"
                overlayClassName="modal-carrousel_overlay"
                closeTimeoutMS={0}>

                <div className='modalContent_carrousel'>
                    <div className='row'>
                        <img className='img1' src={selectedProject.image2} alt={selectedProject.title} />
                        <div className="projectDescription">
                            <h1>{selectedProject.title}</h1>
                            <h2>Description :</h2>
                            <p>{selectedProject.description}</p>
                            <h2>Technologies utilisées :</h2>
                        </div>
                    </div>
                    <img className='img3' src={selectedProject.image3} alt="" />
                </div>

            </Modal>





        </div>
    );
};

export default Carrousel;