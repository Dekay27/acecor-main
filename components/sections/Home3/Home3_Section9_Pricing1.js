import React from 'react'

export default function Home3_Section9() {
    return (
        <>
            <section className="pricing-section">
                <div className="bg" />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our pricing plans</span>
                        <h2>Best pricing plans that <br />fits for you</h2>
                    </div>
                    <div className="row">
                        {/* Pricing Block */}
                        <div className="pricing-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h3 className="title">Basic plan</h3>
                                    <div className="text">Designed for businesses with basic IT requirements</div>
                                </div>
                                <h2 className="price"><sup>$</sup>99<sub>/Month</sub></h2>
                                <h6 className="sub-title">All Basic services include:</h6>
                                <ul className="features">
                                    <li>24/7 system monitoring</li>
                                    <li>Security management</li>
                                    <li className="false">Patch management</li>
                                    <li className="false">Remote support</li>
                                </ul>
                                <a href="#" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                            </div>
                        </div>
                        {/* Pricing Block */}
                        <div className="pricing-block tagged col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h3 className="title">Basic plan</h3>
                                    <div className="text">Designed for businesses with basic IT requirements</div>
                                </div>
                                <h2 className="price"><sup>$</sup>99<sub>/Month</sub></h2>
                                <h6 className="sub-title">All Basic services include:</h6>
                                <ul className="features">
                                    <li>24/7 system monitoring</li>
                                    <li>Security management</li>
                                    <li>Patch management</li>
                                    <li>Remote support</li>
                                </ul>
                                <a href="#" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                            </div>
                        </div>
                        {/* Pricing Block */}
                        <div className="pricing-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h3 className="title">Pro plan</h3>
                                    <div className="text">Designed for businesses with basic IT requirements</div>
                                </div>
                                <h2 className="price"><sup>$</sup>99<sub>/Month</sub></h2>
                                <h6 className="sub-title">All Basic services include:</h6>
                                <ul className="features">
                                    <li>24/7 system monitoring</li>
                                    <li>Security management</li>
                                    <li>Patch management</li>
                                    <li>Remote support</li>
                                </ul>
                                <a href="#" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
