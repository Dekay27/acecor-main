import Link from 'next/link';
import React from 'react';

const ProjectOne = ({ addClass }) => {
    const data = [
        {
            img: "project-1.jpg",
        },
        {
            img: "project-2.jpg",
        },
        {
            img: "project-3.jpg",
        },
        {
            img: "project-4.jpg",
        },
        {
            img: "project-1.jpg",
        },
        {
            img: "project-2.jpg",
        }
    ];
    return (
        <>
            <section className={`project-section ${addClass}`}>
                <div className="container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="col-xl-4 col-lg-6">
                                <div className="project-block mb-30">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><a href="page-project-details"><img src={`images/resource/${item.img}`} alt /></a>
                                            </figure>
                                            <div className="info-box">
                                                <a href="page-project-details" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                                                <span className="cat">Graphics</span>
                                                <h6 className="title"><a href="page-project-details">Digital marketing web</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectOne;