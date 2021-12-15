// import MyMoviesImg from '../../images/MyMovies.png';
import axios from "axios";
import { useState, useEffect } from "react";
import FavoritesCard from './../../components/Card/FavoritesCard';

import { toast } from 'react-toastify';

function MyFavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    const myFavoritesList = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/favorite`,
                { headers: { Authorization: 'Bearer ' + token } });
            // console.log(response.data);
            setFavorites(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const removeFavoriteMovie = async (movieId) => {
        try {
            const token = localStorage.getItem('authToken');

            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/favorite/${movieId}`,
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
            <div className="title-myMovies">
                <h1> Favorites</h1>


                <div >
                    <FavoritesCard key={favorites.id} favorites={favorites} removeFavoriteMovie={removeFavoriteMovie} />
                </div>
            </div>
        </div>
    ) :
        <h3> Sorry, no favorites added to this list yet!</h3>
}

export default MyFavoritesPage;