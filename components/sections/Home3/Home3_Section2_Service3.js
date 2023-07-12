import React from 'react';
const data = [
    {
        icon:"icon flaticon-color-sample",
        title: <>{`Web`} <br />{`designing`}</>
    },
    {
        icon:"icon flaticon-front-end",
        title: <>{`Web`} <br />{`development`}</>
    },
    {
        icon:"icon flaticon-online-shopping",
        title: <>{`Web`} <br />{`application`}</>
    },
    {
        icon:"icon flaticon-advertising",
        title: <>{`Web`} <br />{`marketing`}</>
    },
];
export default function Home3_Section2() {
    return (
        <>
            <section className="services-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">What We’re Offering</span>
                        <h2>Services we’re offering to <br />our customers.</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="content">
                                        <div className="icon-box"><i className={item.icon} /></div>
                                        <h5 className="title"><a href="page-service-details">{item.title}</a></h5>
                                        <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                    </div>
                                    <a href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}
