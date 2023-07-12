import React from 'react'
import CounterUp from '../../elements/CounterUp'
import TestimonialSliderThree from '../../slider/TestimonialSliderThree'

export default function Home3_Section10() {
    return (
        <>
            <section className="testimonial-section-three">
                <div className="container-fluid p-0">
                    <div className="outer-box">
                        <div className="carousel-outer">
                            <TestimonialSliderThree />
                        </div>
                        <div className="banner-box">
                            <div className="inner-box" style={{ backgroundImage: 'url(./images/resource/banner-1.jpg)' }}>
                                <h3>Our agency is <br />one of the most<br /> successful<br /> agency.</h3>
                                <a href="page-about" className="theme-btn btn-style-one light"><span className="btn-title">Explore now</span></a>
                            </div>
                        </div>
                        <div className="fact-counter-two">
                            <div className="row">
                                {/* Counter block*/}
                                <div className="counter-block-two col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner">
                                        <i className="icon flaticon-campaign" />
                                        <div className="count-box"><span className="count-text"><CounterUp count={300} time={1} /></span></div>
                                        <h6 className="counter-title">Clothes Washed <br />&amp; Dry Cleaned</h6>
                                    </div>
                                </div>
                                {/*Counter block*/}
                                <div className="counter-block-two col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="inner">
                                        <i className="icon flaticon-social-campaign" />
                                        <div className="count-box"><span className="count-text"><CounterUp count={489} time={1} /></span></div>
                                        <h6 className="counter-title">Customers are <br />Happy &amp; Satisfied</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
