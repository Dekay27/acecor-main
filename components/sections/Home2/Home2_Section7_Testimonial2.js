import React from 'react'
import TestimonialSliderTwo from '../../slider/TestimonialSliderTwo'

export default function Home2_Section7() {
    return (
        <>
            <section className="testimonial-section-two">
                <div className="bg bg-pattern-11" />
                <div className="auto-container">
                    <div className="row">
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <div className="bg-shape" />
                                    <figure className="image image-4"><img src="/images/resource/thumb-4.jpg" alt /></figure>
                                    <figure className="image image-3"><img src="/images/resource/thumb-3.jpg" alt /></figure>
                                    <figure className="image image-2"><img src="/images/resource/thumb-2.jpg" alt /></figure>
                                    <figure className="image image-1"><img src="/images/resource/thumb-1.jpg" alt /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our Testimonials</span>
                                    <h2>What they’re talking <br />about us</h2>
                                </div>
                                <div className="carousel-outer">
                                    <TestimonialSliderTwo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
