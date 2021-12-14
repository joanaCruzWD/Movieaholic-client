import MyMoviesImg from '../../images/MyMovies.png';
import axios from "axios";
import { useState, useEffect } from "react";
import FavoritesCard from './../../components/Card/FavoritesCard';

import { toast } from 'react-toastify';

// const apiURL = "http://localhost:5005/api";

function MyFavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    const myFavoritesList = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/favorite`,
                { headers: { Authorization: 'Bearer ' + token } });
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
        myFavoritesList()
        setIsDeleted(false);
    }, [isDeleted])

    return (favorites.length > 0) ? (
        <div className="bg-movies">
            <div className="title-myMovies">
                <h1> Favorites</h1>
            </div>

            <div className='all-movies-displayed'>
                {favorites.map((oneFavorite) => (
                    <FavoritesCard removeFavoriteMovie={removeFavoriteMovie} movie={oneFavorite} key={oneFavorite.id} />
                ))}
            </div>

            <div className="bg-home">
                <img src={MyMoviesImg} alt="bg-home" width="300px"></img>
            </div>
        </div>
    ) :
        <h3> Sorry, no favorites added to this list yet!</h3>
}

export default MyFavoritesPage;