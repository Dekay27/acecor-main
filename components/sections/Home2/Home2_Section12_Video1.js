import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Home2_Section12() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="video-section-two p-0">
                <div className="auto-container">
                    <div className="video-box-two">
                        <figure className="image"><img src="/images/resource/video.jpg" alt />
                            <a onClick={() => setOpen(true)} className="play-now" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /><span className="ripple" /></a>
                        </figure>
                        <div className="info-box">
                            <h2 className="title">1599</h2>
                            <div className="text">Projects have been<br /> completed</div>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                    </div>
                </div>
            </section>

        </>
    )
}
