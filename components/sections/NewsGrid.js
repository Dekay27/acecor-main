import Link from 'next/link';
import React from 'react';

const BlogOne = ({ alternate }) => {
  const data = [
    {
        img: "news-1.jpg",
        title: "Over ride the digital divide with additional",
        author: "Admin",
        date: "22 Dec 2023"
    },
    {
        img: "news-2.jpg",
        title: "Over ride the digital divide with additional",
        author: "Admin",
        date: "22 Dec 2023"
    },
    {
        img: "news-3.jpg",
        title: "Over ride the digital divide with additional",
        author: "Admin",
        date: "22 Dec 2023"
    }
];
    return (
        <>
            {/* News Section */}
            <section className="news-section">
                <div className="auto-container">
                    <div className="row">

                    {data.map((item, i) => (
                            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <a href="news-details">
                                                <img src={`/images/resource/${item.img}`} alt />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="content-box">
                                        <span className="date">{item.date}</span>
                                        <span className="post-info"><i className="fa fa-user-circle" /> by {item.author}</span>
                                        <h5 className="title"><a href="news-details">{item.title}</a></h5>
                                        <div className="text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.</div>
                                        <a href="news-details" className="read-more"><i className="fa fa-long-arrow-alt-right" /> Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/*End News Section */}
        </>
    );
};

export default BlogOne;