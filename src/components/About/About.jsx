import React from 'react'
import './About.css'

function About() {
    return (
        <div>
            <section class="services-area services-bg" data-background="img/bg/services_bg.jpg" style={{ backgroundImage: 'url(https://themebeyond.com/html/movflx/img/bg/services_bg.jpg)' }}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="services-img-wrap">
                                <img src="https://themebeyond.com/html/movflx/img/images/services_img.jpg" alt="" />
                                <a href="img/images/services_img.jpg" class="download-btn" download="">Download <img src="https://themebeyond.com/html/movflx/fonts/download.svg" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="services-content-wrap">
                                <div class="section-title title-style-two mb-20">
                                    <span class="sub-title">Our Services</span>
                                    <h2 class="title">Download Your Shows Watch Offline.</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem
                                    Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                                <div class="services-list">
                                    <ul>
                                        <li>
                                            <div class="icon">
                                                <i class="fas fa-tv" style={{ color: 'goldenrod' }}></i>
                                            </div>
                                            <div class="content">
                                                <h5>Enjoy on Your TV.</h5>
                                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fas fa-video" style={{ color: 'goldenrod' }}></i>
                                            </div>
                                            <div class="content">
                                                <h5>Watch Everywhere.</h5>
                                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
