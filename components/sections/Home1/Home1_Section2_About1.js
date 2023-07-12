import React from 'react'

export default function Home1_Section2() {
    return (
        <>

            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>We provide best design solution in town</h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn.</div>
                                </div>
                                <ul className="list-style-two">
                                    <li><i className="fa fa-check-circle" /> Refresing to get such a personal touch.</li>
                                    <li><i className="fa fa-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate.</li>
                                    <li><i className="fa fa-check-circle" /> Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>

                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/acecor_logo.png" alt /></figure>
                                {/*<figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-2.jpg" alt /></figure>*/}
                                {/*<div className="experience bounce-y">*/}
                                {/*    <div className="inner">*/}
                                {/*        <i className="icon flaticon-discuss" />*/}
                                {/*        <div className="text"><strong>30+</strong> Years of <br />experience</div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        {/*<div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">*/}
                        {/*    <div className="inner-column wow fadeInLeft">*/}
                        {/*        <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-1.jpg" alt /></figure>*/}
                        {/*        <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-2.jpg" alt /></figure>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>


        </>
    )
}
