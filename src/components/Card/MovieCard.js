import React from 'react-router-dom';
import './../Card/MovieCard.css'
import FavoriteBtn from '../Favorites/FavoriteBtn'

const imageUrl = "https://image.tmdb.org/t/p/w500"

function MovieCard({ movie }) {

    return (
        <div className="movie-details-card">
            <div className="movie">
                <div className="movie__poster">
                    <img src={`${imageUrl}${movie.posterPath}`} alt="poster" className="movie__img" />
                </div>
                <div className="movie__content">
                    <div className="movie__title">
                        <h1 className="heading__primary">{movie.title}<i className="fas fa-film-alt"></i></h1>
                    </div>
                    <p className="movie__overview">
                        {movie.overview}
                    </p>
                    <div className="movie__details">
                        <h4 className="movie__detail">Vote average 🏆
                            <p>{movie.voteAverage}</p>
                        </h4>
                        <h4 className="movie__detail">Release date 📅
                            <p>{movie.releaseDate}</p>
                        </h4>
                        <h4 className="movie__detail">Runtime 🕑
                            <p>{movie.runtime} min</p>
                        </h4>
                    </div>
                    <FavoriteBtn movie={movie} />
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
