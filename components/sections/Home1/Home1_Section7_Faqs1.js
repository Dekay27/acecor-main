import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Accordion from '../../elements/Accordion';
export default function Home1_Section7() {
    const percentage = 66;
    return (
        <>
            <section className="faqs-section">
                <div className="bg bg-pattern-4" />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">You’ve have Any Questions?</span>
                        <h2>Frequently asked questions</h2>
                    </div>
                    <div className="row">
                        {/* FAQ Column */}
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <Accordion />
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><img src="/images/resource/faq.jpg" alt /></figure>
                                </div>
                                <div className="graph-box">
                                    {/* Pie Graph */}
                                    <div className="pie-graph">
                                        <div className="graph-outer">
                                            <div style={{ width: 100, height: 100 }}>
                                                <CircularProgressbar
                                                    value={percentage}
                                                    text={`${percentage}%`}
                                                    styles={buildStyles({
                                                        textColor: "#0066cc",
                                                        trailColor: '#d6d6d6',
                                                        pathColor: "#0059b3",
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <h6 className="title">Affordable <br />cost</h6>
                                    </div>
                                    {/* Pie Graph */}
                                    <div className="pie-graph">
                                        <div className="graph-outer">
                                            <div style={{ width: 100, height: 100 }}>
                                                <CircularProgressbar value={66} text={`${percentage}%`} styles={buildStyles({
                                                    textColor: "#0066cc",
                                                    trailColor: '#d6d6d6',
                                                    pathColor: "#0059b3",
                                                })} />
                                            </div>
                                        </div>
                                        <h6 className="title">Quality <br />of work</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
