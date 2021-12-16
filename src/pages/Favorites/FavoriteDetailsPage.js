
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import FavoriteCard from '../../components/Card/FavoriteCard';
import ErrorPage from './../ErrorPage/ErrorPage';
import { toast } from 'react-toastify';


import Comments from "./../../components/Comments/Comments";


function FavoriteDetailsPage() {
    const [favoriteDetails, setFavoriteDetails] = useState({});
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const { favoriteId } = useParams();

    const oneFavoriteDetails = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/favorite/${favoriteId}`,
                { headers: { Authorization: 'Bearer ' + token } });
            setFavoriteDetails(response.data);
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    const removeFavoriteMovie = async (movieId) => {
        try {
            const token = localStorage.getItem('authToken');

            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/favorite/${movieId}`,
                { headers: { Authorization: 'Bearer ' + token } });

            toast.error('Removed from favorites!')
            navigate("/favorite")

        } catch (error) {
            toast.error('Something went wrong!')
        }
    }


    useEffect(() => {
        oneFavoriteDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return !error ? (
        <>
            <div className='all-movies-displayed'>
                <FavoriteCard favorite={favoriteDetails} removeFavoriteMovie={removeFavoriteMovie} />
            </div>
            <div style={{ width: "fit-content", display: "inline-flex" }}>
                <Comments favoriteId={favoriteId} />
            </div>
        </>
    )
        :
        <ErrorPage />
}

export default FavoriteDetailsPage;
