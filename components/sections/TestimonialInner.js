import React from 'react';
import TestimonialSliderOne from '../slider/TestimonialSliderOne'

const TestimonialGrid = () => {
    return (
        <>
            <section className="bg-silver-light">
                <div className="container">
                    <div className="row">
                        <div className="testimonial-column col-xl-12 col-lg-12 col-md-6">
                            <div className="carousel-outer">
                                <TestimonialSliderOne/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialGrid;