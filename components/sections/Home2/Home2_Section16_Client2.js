import React from 'react'
import ClientSliderOne from '../../slider/ClientSliderOne'

export default function Home2_Section16() {
    return (
        <>
            <section className="clients-section style-two">
                <div className="auto-container">
                    {/* Sponsors Outer */}
                    <div className="sponsors-outer">
                        {/*clients carousel*/}
                        <ul className="clients-carousel">
                            <ClientSliderOne/>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
