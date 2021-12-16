// import MyMoviesImg from '../../images/MyMovies.png';
import axios from "axios";
import { useState, useEffect } from "react";
import FavoriteCard from '../../components/Card/FavoriteCard';

import { toast } from 'react-toastify';
const API = process.env.REACT_APP_SERVER_URL;

function MyFavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    const myFavoritesList = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${API}/api/favorite`,
                { headers: { Authorization: 'Bearer ' + token } });
            setFavorites(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const removeFavoriteMovie = async (movieId) => {
        try {
            const token = localStorage.getItem('authToken');

            await axios.delete(`${API}/api/favorite/${movieId}`,
                { headers: { Authorization: 'Bearer ' + token } });

            toast.error('Removed from favorites!')
            setIsDeleted(true);
        } catch (error) {
            toast.error('Something went wrong!')
        }
    }

    useEffect(() => {
        myFavoritesList()
    }, [])

    useEffect(() => {
        if (isDeleted) {
            console.log('use');
            myFavoritesList()
            setIsDeleted(false);
        }
    }, [isDeleted])

    return (favorites.length > 0) ? (
        <div className="bg-movies">
            <div className="title-favorites">
                <h1> Favorites</h1>
            </div>
            <div >
                <FavoriteCard favorites={favorites} removeFavoriteMovie={removeFavoriteMovie} />
            </div>
        </div>
    ) :
        <div className="warning">
            <h3> Sorry, no favorites added to this list yet!</h3>
        </div>
}

export default MyFavoritesPage;