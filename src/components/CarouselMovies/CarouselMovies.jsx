import React from 'react'
import { Link } from 'react-router-dom'
import './CarouselMovies.css'
import { useState, useEffect } from 'react'
import { firebaseDatabase } from '../../firebase/firebase'

function CarouselMovies(props) {
    const [movies, setMovies] = useState([]);

    const { title, movieType } = props;

    const leafRoot = 'movies';

    useEffect(() => {
        fetchMovies(movieType);
    }, []);

    const fetchMovies = (movieType) => {
        const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
        movieRef.on("value", (snapshot) => {
            const movies = snapshot.val();
            if (movies && movies.length !== 0) {
                setMovies(() => movies);
            }
        });
    };
    return (
        <div>
            <div className="row1">
                <h2>{title}</h2>
                <div className="row__posters">
                    {movies.map((movie) => (
                        <Link to={{
                            pathname: '/HeeTV/each/',
                            state: {
                                id: movie.id,
                                image: movie.poster_path,
                                title: movie.original_name,
                                desc: movie.overview,
                                typeMov: title
                            }

                        }} style={{ width: '150px', marginLeft: '10px' }} key={movie.id}>
                            <img
                                key={movie.id}
                                className="row__poster row__posterLarge"
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.original_name}
                                width="100px"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarouselMovies
