import React from 'react-router-dom';
import './../Card/FavoritesCard.css'

const imageUrl = "https://image.tmdb.org/t/p/w500"

function MovieCard({ movie }) {

    return (
        <div className="wrapper-favorites">
            (<div style={{ width: "25%" }} type="submit">
                <div className="card">
                    <img src={`${imageUrl}${movie.posterPath}`} alt="poster" />
                    <div className="descriptions">
                        <h1>{movie.title}</h1>
                        <h3>OverView</h3>
                        <h5> {movie.overview}</h5>
                        <h3>Release date</h3>
                        <h5> {movie.releaseDate}</h5>
                        <h3>Vote average</h3>
                        <h5>{movie.voteAverage}</h5>
                    </div>
                </div>
            </div>
            )
        </div>
    )
}

export default MovieCard;


