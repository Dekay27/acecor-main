import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSliderTwo = () => {

    const data = [
        {
            img: "project-1.jpg",
        },
        {
            img: "project-2.jpg",
        },
        {
            img: "project-3.jpg",
        },
        {
            img: "project-4.jpg",
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
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
                className="project-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="page-project-details"><img src={`images/resource/${item.img}`} alt /></a>
                                </figure>
                                <div className="info-box">
                                    <a href="page-project-details" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                                    <span className="cat">Graphics</span>
                                    <h6 className="title"><a href="page-project-details">Digital marketing web</a></h6>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default ProjectSliderTwo;

