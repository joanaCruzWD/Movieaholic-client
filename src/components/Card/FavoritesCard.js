import React, { Link } from 'react-router-dom';

const imageUrl = "https://image.tmdb.org/t/p/w500"

function FavoritesCard({ movie }) {

    return (
        <div className="MoviesCard" type="submit">
            <div className="row">
                <Link to={`/favorite/${movie.id}`}>
                    <div className="col col-md-4 col-sm-6">
                        <div className="Title">
                            <h3>{movie.title}</h3>
                        </div>
                        <img src={`${imageUrl}${movie.posterPath}`} alt="poster" width='175rem' />
                        <h3>Vote average: {movie.voteAverage}</h3>
                        <h3>Overview:{movie.overview}</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default FavoritesCard;
