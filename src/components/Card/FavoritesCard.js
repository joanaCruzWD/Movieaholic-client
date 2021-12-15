import React, { Link } from 'react-router-dom';
import RemoveFavorites from './../Favorites/RemoveFavorites';
import './../Card/FavoritesCard.css'

const imageUrl = "https://image.tmdb.org/t/p/w500"

function FavoritesCard({ favorites, removeFavoriteMovie }) {

    return (

        <div className="wrapper1">
            {console.log('favorites', favorites)}
            {favorites && favorites.map((movie) =>
            (
                <div style={{ width: "25%" }} type="submit">

                    <div className="card">
                        <Link to={`/favorite/${movie.id}`}>
                            <img src={`${imageUrl}${movie.posterPath}`} alt="poster" />
                        </Link>
                        <div className="descriptions">
                            <Link to={`/favorite/${movie.id}`}>
                                <h1>{movie.title}</h1>
                            </Link>
                            <RemoveFavorites removeFavoriteMovie={removeFavoriteMovie} movie={movie} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FavoritesCard;


