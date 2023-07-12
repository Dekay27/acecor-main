import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSliderThree = () => {

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
                className="testimonial-carousel-three"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block-three">
                        <div className="inner-box">
                            <div className="thumb">
                                <img src="/images/resource/thumb-5.jpg" alt />
                                <span className="icon fa fa-quote-right" />
                            </div>
                            <div className="text">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a
                                personal touch.</div>
                            <h6 className="name">Kevin martin <span className="designation"> - &nbsp; Co founder</span></h6>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default TestimonialSliderThree;

