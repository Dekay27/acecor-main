import React from 'react'
const data = [
    {
        icon:"fa fa-globe",
        title: "Website"
    },
    {
        icon:"fab fa-android",
        title: "Android"
    },
    {
        icon:"fa fa-tv",
        title: "Web application"
    },
    {
        icon:"fa fa-tools",
        title: "Designing"
    },
    {
        icon:"fa fa-lightbulb",
        title: "Technology"
    },
    {
        icon:"fa fa-brain",
        title: "Solutions"
    },
];
export default function Home2_Section10() {
    return (
        <>
            <section className="features-section-three">
                <div className="bg" style={{ backgroundImage: 'url(./images/background/3.jpg)' }} />
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Working areas</span>
                                    <h2>IT Services Customized for Your Industry</h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
                                        eiusmod tempor incididunt ualiqua</div>
                                </div>
                                <a href="page-services" className="theme-btn btn-style-one"><span className="btn-title">Explore
                                    now</span></a>
                            </div>
                        </div>
                        <div className="features-column col-xl-6 col-lg-12 col-md-12">
                            <div className="row">
                                {data.map((item, i) => (
                                    <div className="feature-block-three col-lg-6 col-md-6">
                                        <div className="inner-box">
                                            <div className="content">
                                                <span className="icon"><i className={item.icon} /></span>
                                                <h6 className="title"><a href="page-service-details">{item.title}</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
