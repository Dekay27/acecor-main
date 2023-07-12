import React from 'react'
import ProjectSliderTwo from '../../slider/ProjectSliderTwo'

export default function Home2_Section8() {
    return (
        <>
            <section className="projects-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Recent Work</span>
                        <h2>Work showcase</h2>
                    </div>
                    <div className="carousel-outer">
                        <ProjectSliderTwo/>
                    </div>
                </div>
            </section>

        </>
    )
}
