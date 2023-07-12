import React from 'react'

export default function Home3_Section3() {
    return (
        <>
            <section className="about-section-four pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Get to Know</span>
                                    <h2>Change your business look with us</h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn.</div>
                                </div>
                                <h5 className="title">We have 35+ years of experience. We offer marketing and consulting services</h5>
                                <a href="tel:+92(8800)9806" className="info-btn"> <i className="icon flaticon-phone-ringing" /> <small>Have any question? Give us a call</small> +92 666 888 0000</a>
                                <a href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <span className="bg-shape" />
                                    <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-6.jpg" alt /></figure>
                                    <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-7.jpg" alt /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
