import React from 'react'
import CounterUp from '../../elements/CounterUp'

const data = [
    {
        icon: "campaign",
        title: "Projects completed",
        count:960
    },
    {
        icon: "reputation",
        title: "Active clients",
        count:32
    },
    {
        icon: "coffee",
        title: "Cups of coffee",
        count:89
    },
    {
        icon: "social-campaign",
        title: "Satisfied customers",
        count:763
    },
];

export default function Home2_Section4() {
    return (
        <>
            <section className="fun-fact-section pt-0" style={{ backgroundImage: 'url(./images/background/1.png)' }}>
                <div className="auto-container">
                    <div className="upper-box">
                        <span className="title">Happy cutomers</span>
                        <div className="number-outer">
                            <div className="numbers" style={{ backgroundImage: 'url(./images/resource/image-1.jpg)' }}>86900+</div>
                        </div>
                    </div>
                    <div className="fact-counter">
                        <div className="row">
                            {data.map((item, i) => (
                                <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner">
                                        <i className={`icon flaticon-${item.icon}`} />
                                        <div className="count-box"><span className="count-text"><CounterUp count={item.count} time={1} /></span></div>
                                        <h6 className="counter-title">{item.title}</h6>
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
