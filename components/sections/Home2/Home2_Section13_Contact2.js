import React from 'react'

export default function Home2_Section13() {
    return (
        <>
            <section className="contact-section-two pull-up pull-down">
                <div className="bg bg-pattern-14" />
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-lg-5 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Get in touch</span>
                                    <h2>We are Here to<br /> Help You &amp; Your<br /> Business</h2>
                                    <div className="text">Alteration in some form, lipsum is simply free text by injected humou
                                        or randomised</div>
                                </div>
                                <div className="timing">
                                    <span className="tilte">Timings</span>
                                    <div className="time">9:00 am - 5:00 pm</div>
                                </div>
                            </div>
                        </div>
                        {/* Form Column */}
                        <div className="form-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Contact Form */}
                                <div className="contact-form style-two wow fadeInLeft">
                                    {/*Contact Form*/}
                                    <form method="post" action="get" id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-6">
                                                <input type="text" name="full_name" placeholder="Your Name" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6">
                                                <input type="text" name="Email" placeholder="Email Address" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6">
                                                <input type="text" name="Phone" placeholder="Phone Number" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6">
                                                <input type="text" name="Subject" placeholder="Subject" required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <textarea name="message" placeholder="Write a Message" required defaultValue={""} />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send a
                                                    message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/*End Contact Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
