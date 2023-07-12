import React from 'react'
import ProjectSliderOne from '../../slider/ProjectSliderOne'

export default function Home3_Section5() {
    return (
        <>
            <section className="projects-section style-two pull-up">
                <div className="bg bg-pattern-4" />
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Recent Work</span>
                        <h2>Work showcase</h2>
                    </div>
                    <div className="carousel-outer">
                        <ProjectSliderOne />
                    </div>
                </div>
            </section>

        </>
    )
}
