import React from 'react';

const data = [
    {
        img:"team-1.jpg",
        title: "Aleesha brown",
        desig:"DESIGNER"
    },
    {
        img:"team-2.jpg",
        title: "Kevin martin",
        desig:"DESIGNER"
    },
    {
        img:"team-3.jpg",
        title: "Christine eve",
        desig:"DESIGNER"
    },
    {
        img:"team-1.jpg",
        title: "Robert John",
        desig:"DESIGNER"
    }
];

export default function Home3_Section7() {
    return (
        <>
            <section className="team-section">
                <div className="auto-container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="team-block-two col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><a href="page-team-details"><img src={`/images/resource/${item.img}`} alt /></a></figure>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                                            <a href="#"><i className="fab fa-instagram" /></a>
                                        </div>
                                        <span className="share-icon fa fa-plus" />
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><a href="page-team-details">{item.title}</a></h4>
                                        <span className="designation">{item.desig}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
