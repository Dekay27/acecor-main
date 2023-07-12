import React from 'react';

const data = [
    {
        icon:"flaticon-user-interface",
        title: "Best user interfaces"
    },
    {
        icon:"flaticon-front-end",
        title: "Smooth development"
    },
    {
        icon:"flaticon-design",
        title: "Quality web design"
    },
];

export default function Home3_Section6() {
    return (
        <>
            <section className="why-choose-us-two pt-0">
                <div className="auto-container">
                    <div className="sec-title">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="sub-title">Company Benefits</span>
                                <h2>See why you should<br /> choose agency</h2>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <div className="text">There are many variations of passages of available but the majority have suffered. Alteration in some form, lipsum is simply free text by injected humou or randomised words even believable.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                {data.map((item, i) => (
                                    <div className="feature-block-six">
                                        <div className="inner-box">
                                            <span className="icon"><i className={item.icon} /></span>
                                            <h5 className="title">{item.title}</h5>
                                            <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas. sapien nunc amet ultrices</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/why-us-1.jpg" alt /></figure>
                                    <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/why-us-2.jpg" alt /></figure>
                                    <figure className="logo"><img src="/images/resource/fav-icon-light.png" alt /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
