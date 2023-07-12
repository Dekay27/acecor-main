import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSliderOne = () => {

    const data = [
        {
            img: "testimonial-1.jpg",
            title: "Jame sickres",
            desig: "Founder"
        },
        {
            img: "testimonial-2.jpg",
            title: "Aleesha brown",
            desig: "Co Founder"
        },
        {
            img: "testimonial-3.jpg",
            title: "Mike Hardon",
            desig: "Market Manager"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={2}
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
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 2,
                    },
                    1350: {
                        slidesPerView: 2,
                    },
                }}
                className="testimonial-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/images/resource/testi-1.jpg" alt /></figure>
                                <div className="info-box">
                                    <h4 className="name">Donald hardson</h4>
                                    <span className="designation">CEO - CO Founder</span>
                                </div>
                                <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                            </div>
                            <div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default TestimonialSliderOne;

