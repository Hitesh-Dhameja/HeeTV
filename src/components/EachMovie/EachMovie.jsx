import React from 'react'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.jsx'
import { useLocation } from 'react-router-dom'
import './EachMovie.css'

export default function EachMovie(data) {
    const location = useLocation()
    const { id, image, title, desc, typeMov } = location.state

    return (
        <div>
            <Navbar menu='true' />
            <section class="movie-details-area" data-background="https://themebeyond.com/html/movflx/img/bg/movie_details_bg.jpg" style={{ backgroundImage: "url(https://themebeyond.com/html/movflx/img/bg/movie_details_bg.jpg)" }}>
                <div class="container myBox">
                    <div class="row align-items-center position-relative">
                        <div class="col-xl-3 col-lg-4">
                            <div class="movie-details-img">
                                <img src={`https://image.tmdb.org/t/p/original/${image}`} alt="" />
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-8 myContain">
                            <div class="movie-details-content">
                                <h5>New Episodes</h5>
                                <h2>{title}</h2>
                                <div class="banner-meta">
                                    <ul>
                                        <li class="quality">
                                            <span>Pg 18</span>
                                            <span>hd</span>
                                        </li>
                                        <li class="category">
                                            <a href="#">{typeMov}</a>
                                        </li>
                                        <li class="release-time">
                                            <span><i class="fas fa-calendar-alt"></i> 2021</span>
                                            <span class="ml-1"><i class="far fa-clock"></i> 128 min</span>
                                        </li>
                                    </ul>
                                </div>
                                <p>{desc}</p>
                                <div class="movie-details-prime">
                                    <ul>
                                        <li class="share"><a href="#"><i class="fas fa-share-alt"></i> Share</a></li>
                                        <li class="streaming">
                                            <h6>Prime Video</h6>
                                            <span>Streaming Channels</span>
                                        </li>
                                        <li class="watch"><a href="#" class="btn popup-video" style={{ color: 'white' }}><i class="fas fa-play"></i> Watch Now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="movie-details-btn">
                            <a href="https://themebeyond.com/html/movflx/img/poster/movie_details_img.jpg" class="download-btn" download="">Download <img src="https://themebeyond.com/html/movflx/fonts/download.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
