
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import FavoritesCard from './../../components/Card/FavoritesCard';

const apiURL = "http://localhost:5005/api";


function FavoriteDetailsPage() {
    const [favoriteDetails, setFavoriteDetails] = useState([]);

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
        }
    }
    useEffect(() => {
        oneFavoriteDetails()
    }, [])


    return (
        <>
            <div className='all-movies-displayed'>
                <FavoritesCard movie={favoriteDetails} key={favoriteDetails.id} />
            </div>
        </>
    )
}

export default FavoriteDetailsPage;