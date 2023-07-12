import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSliderOne = () => {

    const data = [
        {
            img: "project-1.jpg",
            title:"coastal area monitoring",
        },
        {
            img: "project-2.jpg",
            title:"eStation",
        },
        {
            img: "project-3.jpg",
            title:"our mobile app",
        },
        {
            img: "project-3.jpg",
            title:"web app",
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="project-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="page-project-details"><img src={`images/resource/${item.img}`} alt /></a>
                                </figure>
                                <div className="info-box">
                                    <a href="page-project-details" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                                    <span className="cat"></span>
                                    <h4 className="title"><a href="page-project-details">{item.title}</a></h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default ProjectSliderOne;

