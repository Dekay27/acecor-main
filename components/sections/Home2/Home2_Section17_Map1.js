import React from 'react'

export default function Home2_Section17() {
    return (
        <>
            <section className="map-section">
                <iframe className="map" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">
                </iframe>
                <div className="auto-container">
                    <div className="info-box">
                        <div className="text">66 Road Broklyn Street, 600 <br />New York, USA</div>
                        <ul className="info-list">
                            <li><i className="fa fa-envelope" /> <a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                            <li><i className="fa fa-phone-square" /> <a href="tel:+92(666)8880000">+92 (666) 888 0000</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
