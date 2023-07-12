import React from 'react'
import Link from 'next/link';


const data = [
    {
        icon: "icon fa fa-fish",
        title: "Potential Fishing Zones (PFZ)",
        keyword: "PFZ"
    },
    {
        icon: "icon fa fa-temperature-high",
        title: "Sea Surface Temperature",
        keyword: "SFT"
    },
    {
        icon: "icon fa fa-water",
        title: "Ocean State",
        keyword: "ocean"
    },
    {
        icon: "icon fa fa-newspaper",
        title: "Bulletins",
        keyword: "bulletin"
    },
];

export default function Home1_Section3() {

    return (
        <>
            <section className="services-section pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">What We’re Offering</span>
                        <h2>Quick Search</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" key={i}>
                                <div className="inner-box" style={{height: "100%"}}>
                                    <div className="icon-box"><i className={`icon ${item.icon}`} /></div>
                                    <h5 className="title"><Link href={{ pathname: 'page-data-catalog', query: {keyword: `${item.keyword}`} }}>{item.title}</Link></h5>
                                    <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                    <Link href={{ pathname: 'page-data-catalog', query: {keyword: `${item.keyword}`} }} className="read-more"><i className="fa fa-long-arrow-alt-right"/></Link>


                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bottom-box">
                        <div className="text">Trust the experts for all your <strong>web design &amp; development</strong> needs.</div>
                        <Link href={{ pathname: 'page-data-catalog', query: {keyword: "PFZ"} }}
                            className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></Link>
                    </div>
                </div>
            </section>
        </>

    )
}
