import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ErrorPage from './../ErrorPage/ErrorPage';
import MovieCard from '../../components/Card/MovieCard';

const API = process.env.REACT_APP_SERVER_URL;

function MovieDetailsPage() {
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);

    const { movieId } = useParams();

    const getMovieDetails = async () => {
        try {
            //const token = localStorage.getItem('authToken');
            const response = await axios.get(`${API}/api/movie/${movieId}`);
            setMovie(response.data);

        } catch (error) {
            console.log(error);
            setError(true)
        }
    }
    useEffect(() => {
        getMovieDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return !error ? (
        <>
            <div className='all-movies-displayed'>

                <MovieCard movie={movie} key={movie.id} />
            </div>
            <div style={{ width: "fit-content", display: "inline-flex" }}>

            </div>
        </>
    ) :
        <ErrorPage />
}

export default MovieDetailsPage;

