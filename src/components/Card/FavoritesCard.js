import React, { Link } from 'react-router-dom';
import RemoveFavorites from './../Favorites/RemoveFavorites';
import './../Card/FavoritesCard.css'

const imageUrl = "https://image.tmdb.org/t/p/w500"

function FavoritesCard({ favorites, removeFavoriteMovie, favorite }) {

    return (

        <div className="wrapper1">
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


            {favorite &&

                <div className="card">
                    <Link to={`/favorite/${favorite.id}`}>
                        <img src={`${imageUrl}${favorite.posterPath}`} alt="poster" />
                    </Link>
                    <div className="descriptions">
                        <Link to={`/favorite/${favorite.id}`}>
                            <h1>{favorite.title}</h1>
                            <h3>OverView</h3>
                            <h5> {favorite.overview}</h5>
                            <h3>Release date</h3>
                            <h5> {favorite.releaseDate}</h5>
                            <h3>Vote average</h3>
                            <h5>{favorite.voteAverage}</h5>

                        </Link>
                        <RemoveFavorites removeFavoriteMovie={removeFavoriteMovie} movie={favorite} />
                    </div>
                </div>
            }
        </div>
    )
}

export default FavoritesCard;


