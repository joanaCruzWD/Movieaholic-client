import React, { Link } from 'react-router-dom';
import FavoriteBtn from './../Favorites/FavoriteBtn'
import './../Card/MoviesCard.css'

const imageUrl = "https://image.tmdb.org/t/p/w500"

function MoviesCard({ movie }) {

    return (
        <div className="MoviesCard" type="submit">
            <div className="row">
                <Link to={`/movieDetails/${movie.id}`}>
                    <div className="col col-md-4 col-sm-6">

                        <img src={`${imageUrl}${movie.posterPath}`} alt="poster" width='175rem' />
                        <h3>Vote average: {movie.voteAverage}</h3>
                    </div>
                </Link>
                <FavoriteBtn movie={movie} />
            </div>
        </div>
    );
}

export default MoviesCard;
