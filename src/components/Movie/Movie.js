import React from 'react'
import CarouselMovies from '../CarouselMovies/CarouselMovies'
import './Movie.css'


function Movie() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <section class="pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-6 navMov">
                            <h3 class="mb-3">Online Streaming </h3><br></br>
                        </div>

                        <CarouselMovies title='Netflix Originals' movieType='netflix-originals' /><br></br>
                        <CarouselMovies title='Trending Now' movieType='trending-now' /><br></br>
                        <CarouselMovies title='Top Rated' movieType='top-rated' /><br></br>
                        <CarouselMovies title='Action Movies' movieType='action-movies' /><br></br>
                        <CarouselMovies title='Horror Movies' movieType='horror-movies' /><br></br>
                        <CarouselMovies title='Romance Movies' movieType='romance-movies' /><br></br>
                        <CarouselMovies title='Documentaries Movies' movieType='documentaries-movies' /><br></br>

                    </div>
                </div>
            </section>
        </div >

    )
}

export default Movie

