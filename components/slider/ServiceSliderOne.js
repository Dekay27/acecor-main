import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ServiceSliderOne = () => {

    const data = [
        {
            img: "client.png",
        },
        {
            img: "client.png",
        },
        {
            img: "client.png",
        },
        {
            img: "client.png",
        },
        {
            img: "client.png",
        },
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
                className="services-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="service-block-two">
                                <div className="inner-box">
                                    <span className="count">01</span>
                                    <div className="icon-box"><i className="icon flaticon-color-sample" /></div>
                                    <h5 className="title"><a href="page-service-details">Web designing</a></h5>
                                    <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet
                                        ultrices.</div>
                                </div>
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default ServiceSliderOne;

