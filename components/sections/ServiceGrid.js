import React from 'react'

const data = [
    {
        icon: "flaticon-color-sample",
        title: "Web designing"
    },
    {
        icon: "flaticon-front-end",
        title: "Web development"
    },
    {
        icon: "flaticon-online-shopping",
        title: "Web application"
    },
    {
        icon: "flaticon-color-sample",
        title: "Web designing"
    },
    {
        icon: "flaticon-front-end",
        title: "Web development"
    },
    {
        icon: "flaticon-online-shopping",
        title: "Web application"
    }
];

export default function Home1_Section3() {

    return (
        <>
            <section className="services-section">
                <div className="auto-container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="service-block col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" key={i}>
                                <div className="inner-box">
                                    <div className="icon-box"><i className={`icon ${item.icon}`} /></div>
                                    <h5 className="title"><a href="page-service-details">{item.title}</a></h5>
                                    <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                    <a href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right" /> Read more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}
