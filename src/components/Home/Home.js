import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="heading">
                <h3>HeeTV</h3>
            </div>
            <div className="sub_heading">
                <h1>Unlimited <span>Movie</span>,</h1>
                <h1>TVs Shows, & more.</h1>
            </div>
            <div className="bottom">
                <ul>
                    <li><span class="badge badge-light">PG 18</span></li>
                    <li><span class="badge badge-light">HD</span></li>
                    <li><p>Romance,Drama</p></li>
                    <li><i class="fas fa-calendar-alt"></i><span>2021</span></li>
                    <li><i class="far fa-clock"></i><span>128 min</span></li>
                </ul>
                <div>
                    <button type="button" class="btn btn-outline-warning"><i class="fas fa-play"></i>Watch Now</button>
                </div>
            </div>

        </div>
    )
}

export default Home
