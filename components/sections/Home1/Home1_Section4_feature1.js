import React from 'react'

const data = [
    {
        title: "Best user interfaces"
    },
    {
        title: "Smooth development"
    },
    {
        title: "Quality web design"
    },
];

export default function Home1_Section4() {
    return (
        <>
            <section className="features-section">
                <div className="bg bg-pattern-2" />
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-5 col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <span className="sub-title">Welcome to Agency</span>
                                    <h2>Experienced designers &amp; developers</h2>
                                </div>
                                {data.map((item, i) => (
                                    <div className="feature-block">
                                        <div className="inner-box">
                                            <div className="content">
                                                <span className="icon"><i className="fa fa-check" /></span>
                                                <h5 className="title">{item.title}</h5>
                                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas. sapien nunc amet ultrices</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Content Column */}
                        <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/image-2.jpg" alt /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
