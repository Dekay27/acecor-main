import React from 'react'
import Accordion from '../../elements/Accordion'

export default function Home2_Section11() {
    return (
        <>
            <section className="faqs-section-two">
                <div className="auto-container">
                    <div className="sec-title">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="sub-title">Company Benefits</span>
                                <h2>We’re more than an <br />agency</h2>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
                                    tempor incididunt ut labore et We are passionate about changing quis nostrud.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <figure className="image overlay-anim"><img src="/images/resource/faq-2.jpg" alt />
                                        </figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <figure className="image overlay-anim"><img src="/images/resource/faq-3.jpg" alt />
                                        </figure>
                                    </div>
                                </div>
                                {/* Faq Block */}
                                <div className="faq-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon flaticon-verification" />
                                            <h5 className="title">Best user interfaces</h5>
                                        </div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                            eiusmod tempor incididunt ut labore et We are passionate about</div>
                                    </div>
                                </div>
                                {/* Faq Block */}
                                <div className="faq-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon flaticon-help" />
                                            <h5 className="title">Quality web design</h5>
                                        </div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                            eiusmod tempor incididunt ut labore et We are passionate about</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FAQ Column */}
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <Accordion/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
