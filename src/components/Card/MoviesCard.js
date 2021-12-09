import { Link } from "react-router-dom";

const imageUrl = "https://image.tmdb.org/t/p/w500"

function MoviesCard({ movie }) {

    return (
        <div className="MoviesCard" type="submit">
            <div className="row">
                <Link to={`/movieDetails/${movie.id}`}>
                    <div class="col col-md-4 col-sm-6">
                        <div className="Title">
                            <h3>{movie.title}</h3>
                        </div>
                        <img src={`${imageUrl}${movie.posterPath}`} alt="poster" width='175rem' />
                        <h3>{movie.voteAverage}</h3>
                        <button className="favorites-btn">💖</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MoviesCard;
