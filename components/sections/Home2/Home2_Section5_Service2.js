import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import CounterUp from '../../elements/CounterUp'
import ServiceSliderOne from '../../slider/ServiceSliderOne'

export default function Home2_Section5() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="services-section-two">
                <div className="bg bg-pattern-10" />
                <div className="auto-container">
                    <div className="upper-box row">
                        <div className="left-column col-lg-6 col-md-12">
                            <div className="sec-title light">
                                <span className="sub-title">What We’re Offering</span>
                                <h2>Services we’re <br />offering to customer to <br />grow business</h2>
                            </div>
                        </div>
                        <div className="right-column col-lg-6 col-md-12">
                            <div className="fact-counter-three">
                                {/* Counter block*/}
                                <div className="counter-block-three wow fadeInUp">
                                    <div className="inner">
                                        <div className="count-box"><span className="count-text"><CounterUp count={15} time={1}/></span>+</div>
                                        <h6 className="counter-title">Winning Awards</h6>
                                    </div>
                                </div>
                                {/*Counter block*/}
                                <div className="counter-block-three" data-wow-delay="300ms">
                                    <div className="inner">
                                        <div className="count-box"><span className="count-text"><CounterUp count={195} time={1}/></span>+</div>
                                        <h6 className="counter-title">Team Members</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="video-box">
                                <figure className="image"><img src="/images/resource/image-4.jpg" alt /></figure>
                                <a onClick={() => setOpen(true)} className="play-btn" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /></a>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                        </div>
                    </div>
                    <div className="outer-box">
                        <ServiceSliderOne />
                    </div>
                    <div className="bottom-box">
                        <div className="text">Make your first quality web and app design &amp; development <a href="page-services.html" className="theme-btn">Find Your Solution</a></div>
                    </div>
                </div>
            </section>

        </>
    )
}
