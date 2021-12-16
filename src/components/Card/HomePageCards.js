import React, { Link } from 'react-router-dom';
import FavoriteBtn from '../Favorites/FavoriteBtn'
import './../Card/HomePageCard.css'

const imageUrl = "https://image.tmdb.org/t/p/w500"

function HomePageCards({ movies }) {

    return (

        <div className="wrapper-movies" >
            {movies.map((movie) =>
            (<div style={{ width: "25%" }} type="submit" key={movie.id}>
                <div className="card">
                    <Link to={`/movie-details/${movie.id}`}>
                        <img src={`${imageUrl}${movie.posterPath}`} alt="poster" />
                    </Link>
                    <div className="descriptions">
                        <Link to={`/movie-details/${movie.id}`}>
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

export default HomePageCards;
