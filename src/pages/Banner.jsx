import React from 'react'

const Banner = () => {
    return (
        <section className='banner__'>
            <div className="section_wrapper section_banner">
                <div className="vedio_wrapper">
                    <video autoPlay muted loop src="video/banner.mp4" className='banner_vedio' type="video/mp4"></video>
                </div>

                <div className="banner_content overlay">
                    <div className="text">
                        <h2>Never Stop To </h2>
                        <h3>Learn and Gain</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner
