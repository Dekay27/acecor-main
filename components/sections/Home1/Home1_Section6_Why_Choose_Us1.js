import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Home1_Section6() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="why-choose-us">
                <div className="bg bg-pattern-2" />
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Company Benefits</span>
                                    <h2>We’re more than an agency</h2>
                                    <div className="text">There are many variations of passages of available but the majority have suffered. Alteration in some form, lipsum is simply free text by injected humou or randomised words even believable.</div>
                                </div>
                                <blockquote className="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod</blockquote>
                                <div className="btn-box">
                                    <a  onClick={() => setOpen(true)} className="play-now-two lightbox-image"><i className="icon fa fa-play" /> Watch our <br />few minautes video</a>
                                    <a href="page-service-details" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <span className="bg-shape" />
                                    <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/benefit-1.jpg" alt /></figure>
                                    <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/benefit-2.jpg" alt /></figure>
                                    <figure className="image-3 overlay-anim wow fadeInRight"><img src="/images/resource/benefit-3.jpg" alt /></figure>
                                    <figure className="logo"><img src="" alt /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
