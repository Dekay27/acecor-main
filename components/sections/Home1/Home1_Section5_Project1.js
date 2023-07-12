import React from 'react'
import ProjectSliderOne from '../../slider/ProjectSliderOne'

export default function Home1_Section5() {
    return (
        <>
            <section className="projects-section-two p-0" style={{height:900,}}>
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/ocean5.png)' }} />
                <div className="auto-container">

                    <div className="sec-title text-center light">
                        <span className="sub-title"></span>
                        <h1>Our Tools</h1>
                    </div>
                    <div className="carousel-outer">
                        <ProjectSliderOne />
                    </div>
                </div>
            </section>
        </>

    )
}
