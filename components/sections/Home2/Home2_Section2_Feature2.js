import React from 'react'

const data = [
    {
        icon: "trophy",
        title: "Award winning agency"
    },
    {
        icon: "medal",
        title: "Best quality work"
    },
    {
        icon: "satisfaction",
        title: "Satisfaction guarantee"
    },
];

export default function Home2_Section2() {
    return (
        <>
            <section className="features-section-two">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            {data.map((item, i) => (
                                <div className="feature-block-two col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner-box overlay-anim">
                                        <div className="content">
                                            <span className="icon"><i className={`flaticon-${item.icon}`} /></span>
                                            <h6 className="title">{item.title}</h6>
                                            <div className="text">Lorem ium dolor sit amet pisicing elit sed do ut.</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
