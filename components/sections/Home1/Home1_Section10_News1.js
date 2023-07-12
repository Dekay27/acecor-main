import React from 'react'
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

export default function Home1_Section10() {
    return (
        <>
            <section className="news-section">
                <div className="bg bg-pattern-6" />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">News &amp; Articles</span>
                        <h2>Latest from the blog</h2>
                    </div>
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

        </>
    )
}
