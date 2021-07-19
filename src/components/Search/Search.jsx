import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { useStateValue } from "../../redux/StateProvider";
import { useState, useEffect } from 'react'

function Search() {
    const [{ term }, dispatch] = useStateValue();
    const [movie, setMovie] = useState([]);
    console.log(term);
    const url = "https://www.omdbapi.com/?apikey=f5a376a&t=" + term


    //Fetch Quotes from API
    const getMovie = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovie(data));
    }
    console.log(movie)
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <Navbar menu='true' />
            {movie.Error ?
                <div style={{ minHeight: "277px", minWidth: "450px", color: "white", backgroundColor: "black", marginBottom: "0px" }}><h1 style={{ paddingTop: '30px' }}>No results found !</h1></div> :
                <section class="movie-details-area" data-background="https://themebeyond.com/html/movflx/img/bg/movie_details_bg.jpg" style={{ backgroundImage: "url(https://themebeyond.com/html/movflx/img/bg/movie_details_bg.jpg)" }}>
                    <div class="container myBox">
                        <div class="row align-items-center position-relative">
                            <div class="col-xl-3 col-lg-4">
                                <div class="movie-details-img">
                                    <img src={movie.Poster} alt="" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-8 myContain">
                                <div class="movie-details-content">
                                    <h5>New Episodes</h5>
                                    <h2>{movie.Title}</h2>
                                    <div class="banner-meta">
                                        <ul>
                                            <li class="quality">
                                                <span>Pg 18</span>
                                                <span>hd</span>
                                            </li>
                                            <li class="category">
                                                <span>{movie.Genre}</span>
                                            </li>
                                            <li class="category">
                                                <span class="ml-1"><i class="far fa-star"></i> {movie.imdbRating}/10</span>
                                            </li>
                                            <li class="release-time">
                                                <span><i class="fas fa-calendar-alt"></i> {movie.Year}</span>
                                                <span class="ml-1"><i class="far fa-clock"></i> {movie.Runtime}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>{movie.Plot}</p>
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
            }
            <Footer />

        </div >

    )
}

export default Search
