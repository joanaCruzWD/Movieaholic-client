import React, { Link } from 'react-router-dom';
import FavoriteBtn from './../Favorites/FavoriteBtn'
import './../Card/MoviesCard.css'

const imageUrl = "https://image.tmdb.org/t/p/w500"

function MoviesCard({ movies }) {

    return (

        <div className="wrapper-movies" >
            {movies.map((movie) =>
            (<div style={{ width: "25%" }} type="submit" key={movie.id}>
                <div className="card">
                    <Link to={`/movieDetails/${movie.id}`}>
                        <img src={`${imageUrl}${movie.posterPath}`} alt="poster" />
                    </Link>
                    <div className="descriptions">
                        <Link to={`/movieDetails/${movie.id}`}>
                            <h1>{movie.title}</h1>
                        </Link>
                        <FavoriteBtn movie={movie} />
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default MoviesCard;
