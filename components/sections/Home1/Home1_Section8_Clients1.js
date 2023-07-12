import React from 'react'
import ClientSliderOne from '../../slider/ClientSliderOne'

export default function Home1_Section8() {
    return (
        <>
            <section className="clients-section">
                <div className="auto-container">
                    {/* Sponsors Outer */}
                    <div className="sponsors-outer">
                        {/*clients carousel*/}
                        <ul className="clients-carousel">
                            <h2 style={{marginBottom:"50px",textAlign:"center"}} > Project Patners</h2>
                           <ClientSliderOne/>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
