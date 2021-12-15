import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ErrorPage from './../ErrorPage/ErrorPage';
import FavoritesCard from './../../components/Card/FavoritesCard';
import Comments from "./../../components/Comments/Comments";

// const apiURL = "http://localhost:5005/api/movie";
// const imageUrl = "https://image.tmdb.org/t/p/w500"

function MovieDetailsPage() {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(false);

    const { movieId } = useParams();

    const getMovieDetails = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/movie/${movieId}`,
                { headers: { Authorization: 'Bearer ' + token } });
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

                <FavoritesCard favorite={movie} key={movie.id} />
            </div>
            <div style={{ width: "fit-content", display: "inline-flex" }}>

                <Comments favoriteId={movieId} />
            </div>
        </>
    ) :
        <ErrorPage />
}

export default MovieDetailsPage;

