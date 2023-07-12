import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Home3_Section1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="banner-section-two">
                <div className="banner-carousel">
                    {/* Slide Item */}
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/bg-pattern-2.jpg)' }} />
                        <div className="auto-container">
                            <div className="row">
                                <div className="content-column col-lg-6 col-md-12">
                                    <div className="content-box">
                                        <span className="arrow-icon"><img src="/images/main-slider/arrow.png" alt /></span>
                                        <h1 className="title animate-1">We <br />Create Quality Designs</h1>
                                        <div className="btn-box animate-3">
                                            <a href="#" className="theme-btn btn-style-one"><span className="btn-title">Explore Now</span></a>
                                            <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /> Work <br />Showcase</a>
                                        </div>
                                    </div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                                </div>
                                <div className="image-column col-lg-6 col-md-12">
                                    <div className="image-box">
                                        <figure className="image-1 overlay-anim"><img src="/images/main-slider/5.jpg" alt /></figure>
                                        <figure className="image-2 overlay-anim"><img src="/images/main-slider/6.jpg" alt /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="banner-social-links">
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">twitter</a></li>
                    <li><a href="#">instagram</a></li>
                </ul>
            </section>

        </>
    )
}
