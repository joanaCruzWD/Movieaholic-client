
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import FavoritesCard from './../../components/Card/FavoritesCard';
import ErrorPage from './../ErrorPage/ErrorPage';

const apiURL = "http://localhost:5005/api";


function FavoriteDetailsPage() {
    const [favoriteDetails, setFavoriteDetails] = useState([]);
    const [error, setError] = useState(false);

    const { favoriteId } = useParams();

    const oneFavoriteDetails = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${apiURL}/favorite/${favoriteId}`,
                { headers: { Authorization: 'Bearer ' + token } });
            setFavoriteDetails(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error);
            setError(true)
        }
    }
    useEffect(() => {
        oneFavoriteDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return !error ? (
        <>
            <div className='all-movies-displayed'>
                <FavoritesCard movie={favoriteDetails} key={favoriteDetails.id} />
            </div>
        </>
    )
        :
        <ErrorPage />
}

export default FavoriteDetailsPage;