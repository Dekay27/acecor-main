import Link from 'next/link';
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const BannerSliderOne = () => {

    const [isOpen, setOpen] = useState(false)


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 4,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 5,
                //         spaceBetween: 30,
                //     },
                // }}
                className="project-carousel"
            >
                {/* {data.map((item, i) => ( */}
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/slider5.png)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1" style={{ fontSize: '3rem', textAlign:"left", fontWeight: 'bold' }}>Welcome to</span>
                                <h1 className="title animate-2">African Centre of Excellence <br />In coastal resilience</h1>
                                <div className="btn-box animate-3">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /> watch video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/slider4.png)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1"></span>
                                <h1 className="title animate-2">Enhancing coastal resilience and promoting its policies <br /></h1>
                                <div className="btn-box animate-3">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /> watch video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/slider6.png)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1"></span>
                                <h1 className="title animate-2">Sustainable management of coastal environment <br /></h1>
                                <div className="btn-box animate-3">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /> watch video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* ))} */}
            </Swiper>


            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};

export default BannerSliderOne;

