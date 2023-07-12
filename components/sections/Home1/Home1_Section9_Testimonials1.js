import React from 'react'
import TestimonialSliderOne from '../../slider/TestimonialSliderOne'

export default function Home1_Section9() {
    return (
        <>

            <section className="testimonial-section">
                <div className="bg bg-pattern-5" />
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-xl-5 col-lg-4 col-md-12">
                            <div className="sec-title light">
                                <span className="sub-title">Our testimonials</span>
                                <h2>What they’re talking about us</h2>
                                <div className="text">Lorem Ipsum is simply dummy text of free available in market the printing and typesetting industry.</div>
                            </div>
                        </div>
                        <div className="testimonial-column col-xl-7 col-lg-8 col-md-12">
                            <div className="carousel-outer">
                                <TestimonialSliderOne/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
