import React, { useState } from 'react';
import Link from "next/link";

const Accordion = (dataKeyword) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    const {keyword} = dataKeyword;


    // if("PFZ" === dataKeyword){
    //     console.log(keyword)
    //
    // }

    const data = [
        {
            title: "Potential Fishing Zones",
            keyword: "PFZ"
        },
        {
            title: "Sea Surface Temperature",
            keyword: "SFT"
        },
        {
            title: "Ocean State",
            keyword: "ocean"
        },
        {
            title: "Bulletins",
            keyword: "bulletin"
        },
    ];


    return (
        <>


            <ul className="accordion-box wow fadeInRight">
                {/*Block*/}
                <div className="row">

                    <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>Type
                            <div className="icon fa fa-angle-right" />
                        </div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <ul>
                                    {data.map((item, i) => (
                                        /*
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
                                        */
                                        <li><Link href={{ pathname: 'page-data-catalog', query: {keyword: `${item.keyword}`} }} className={keyword === item.keyword ? "active-filter" : ""} > {item.title}</Link></li>


                                    ))}
                                </ul>

                            </div>
                        </div>
                    </li>
                    {/*Block*/}

                    <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>Groups
                            <div className="icon fa fa-angle-right" />
                        </div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>
                            </div>
                        </div>
                    </li>
                    {/*Block*/}

                    <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>Categories
                            <div className="icon fa fa-angle-right" />
                        </div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>
                            </div>
                        </div>
                    </li>
                    {/*/!*Block*!/*/}

                    {/*    <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>*/}
                    {/*        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>How can i find my solutions?*/}
                    {/*            <div className="icon fa fa-angle-right" />*/}
                    {/*        </div>*/}
                    {/*        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>*/}
                    {/*            <div className="content">*/}
                    {/*                <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*     </li>*/}
                    {/*/!*Block*!/*/}

                    {/*    <li className={isActive.key == 5 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(5)}>*/}
                    {/*        <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"}>How can i find my solutions?*/}
                    {/*            <div className="icon fa fa-angle-right" />*/}
                    {/*        </div>*/}
                    {/*        <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>*/}
                    {/*            <div className="content">*/}
                    {/*                <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*     </li>*/}
                </div>

            </ul>
        </>
    );
};

export default Accordion;