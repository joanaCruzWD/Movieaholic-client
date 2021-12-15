import React, { Link } from 'react-router-dom';
import FavoriteBtn from './../Favorites/FavoriteBtn'
import './../Card/MoviesCard.css'


const imageUrl = "https://image.tmdb.org/t/p/w500"

function MoviesCard({ movies }) {


    return (

        <div className="wrapper1" >
            {movies.map((movie) =>
            (
                <div style={{
                    width: "25%"
                }} type="submit" key={movie.id}>

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


// <div className="MoviesCard" type="submit">
//     <div className="row">
//         <Link to={`/movieDetails/${movie.id}`}>
//             <div className="col col-md-4 col-sm-6">

//                 <img src={`${imageUrl}${movie.posterPath}`} alt="poster" width='175rem' />
//                 <h3>Vote average: {movie.voteAverage}</h3>
//             </div>
//         </Link>
//         <FavoriteBtn movie={movie} />
//     </div>
// </div>