import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ErrorPage from './../ErrorPage/ErrorPage';

const apiURL = "http://localhost:5005/api/movie";
const imageUrl = "https://image.tmdb.org/t/p/w500"

function MovieDetailsPage() {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(false);

    const { movieId } = useParams();

    const getMovieDetails = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${apiURL}/${movieId}`,
                { headers: { Authorization: 'Bearer ' + token } });
            setMovie(response.data);

            console.log('setMovie(response.data)', response);
        } catch (error) {
            console.log(error);
            setError(true)

        }
    }
    useEffect(() => {
        getMovieDetails();
    }, [])

    return !error ? (
        <div className="MoviesCard" type="submit">
            <div className="row">

                <div className="col col-md-4 col-sm-6">
                    <div className="title">
                        <h2 >{movie.title}</h2>
                    </div>
                    <img src={`${imageUrl}${movie.posterPath}`} alt="poster" width='175rem' />
                    <h3>Vote average:{movie.voteAverage}</h3>
                    <h3>Overview:{movie.overview}</h3>

                </div>
            </div>
        </div>
    )
        :
        <div>
            <ErrorPage />
        </div>
}

export default MovieDetailsPage;

