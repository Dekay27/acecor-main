import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSliderTwo = () => {

    const data = [
        {
            img: "testi-thumb-4.jpg",
            title: "Jame sickres",
            desig: "Founder"
        },
        {
            img: "testi-thumb-2.jpg",
            title: "Aleesha brown",
            desig: "Co Founder"
        },
        {
            img: "testi-thumb-3.jpg",
            title: "Mike Hardon",
            desig: "Market Manager"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //     },
                //     575: {
                //         slidesPerView: 1,
                //     },
                //     767: {
                //         slidesPerView: 1,
                //     },
                //     991: {
                //         slidesPerView: 2,
                //     },
                //     1199: {
                //         slidesPerView: 2,
                //     },
                //     1350: {
                //         slidesPerView: 2,
                //     },
                // }}
                className="testimonial-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit
                                    amet, hendrerit dui. Vivamus varius libero metus, sit amet hendrerit
                                    semper.</div>
                                <div className="info-box">
                                    <h6 className="name">Kevin martin</h6>
                                    <span className="designation">Designer</span>
                                    <span className="icon icon-quote" />
                                </div>
                                <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default TestimonialSliderTwo;

