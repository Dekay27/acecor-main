import React from 'react'
const data = [
    {
        icon:"icon flaticon-concept",
        title: "Design concept"
    },
    {
        icon:"icon flaticon-programmer",
        title: "Web development"
    },
    {
        icon:"icon flaticon-access",
        title: "Launch website"
    },
];
export default function Home2_Section9() {
    return (
        <>
            <section className="process-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Work Process</span>
                        <h2>3 easy working steps</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <span className="count">01</span>
                                        <i className={item.icon} />
                                    </div>
                                    <h6 className="title">{item.title}</h6>
                                    <div className="text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
