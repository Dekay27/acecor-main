import React from 'react'

export default function Home3_Section8() {
    return (
        <>
            <section className="work-section-two">
                <div className="row g-0">
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="bg bg-pattern-16" />
                        <div className="inner-column">
                            <div className="sec-title light">
                                <span className="sub-title">Working areas</span>
                                <h2>IT Services Customized for Your Industry</h2>
                                <div className="other-text">Lorem ipsum is simply free text dolor sit am adipi we help you <br />ensure everyone.</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ualiqua</div>
                            </div>
                            <div className="row">
                                {/* Work Block Two */}
                                <div className="work-block-two col-lg-6 col-md-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-repair" />
                                        <h5 className="title">Quality web designing</h5>
                                    </div>
                                </div>
                                {/* Work Block Two */}
                                <div className="work-block-two col-lg-6 col-md-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-search-engine" />
                                        <h5 className="title">SEO &amp; content Writing</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <figure className="image"><img src="/images/resource/work-2.jpg" alt /></figure>
                        <div className="sign"><img src="/images/resource/sign.png" alt /></div>
                    </div>
                </div>
            </section>

        </>
    )
}
