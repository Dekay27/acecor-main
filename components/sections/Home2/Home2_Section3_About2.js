import React from 'react'

export default function Home2_Section3() {
    return (
        <>
            <section className="about-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="float-text">Agency</div>
                                <div className="sec-title">
                                    <span className="sub-title">Welcome to Agency</span>
                                    <h2>Experienced designers &amp; developers</h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                        eiusmod tempor incididunt ut labore et We are passionate about changing the way you
                                        think about laundry! dolore magna aliqua. quis nostrud exercitation.</div>
                                </div>
                                <div className="row">
                                    <div className="about-block col-lg-6 col-md-6">
                                        <div className="inner-box">
                                            <i className="icon flaticon-user-interface" />
                                            <h6 className="title">Web solutions</h6>
                                            <div className="text">Duis aute irure dolor simply free in voluptate velit.</div>
                                        </div>
                                    </div>
                                    <div className="about-block col-lg-6 col-md-6">
                                        <div className="inner-box">
                                            <i className="icon flaticon-front-end" />
                                            <h6 className="title">Best interface</h6>
                                            <div className="text">Duis aute irure dolor simply free in voluptate velit.</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore
                                    now</span></a>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-3.jpg" alt /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-4.jpg" alt /></figure>
                                <div className="experience bounce-y">
                                    <div className="inner">
                                        <i className="icon flaticon-design" />
                                        <div className="text">Founded<br /> 1966</div>
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
