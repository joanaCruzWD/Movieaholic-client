import MyMoviesImg from '../../images/MyMovies.png';
import axios from "axios";
import { useState, useEffect } from "react";
import ErrorPage from './../ErrorPage/ErrorPage';
import FavoritesCard from './../../components/Card/FavoritesCard';

const apiURL = "http://localhost:5005/api";

function MyFavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState(false);

    const myFavoritesList = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${apiURL}/favorite`,
                { headers: { Authorization: 'Bearer ' + token } });
            setFavorites(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    useEffect(() => {
        myFavoritesList()
    }, [])

    return !error ? (
        <div className="bg-movies">
            <div className="title-myMovies">
                <h1> Favorites</h1>
            </div>

            <div className='all-movies-displayed'>
                {favorites.map((oneFavorite) => (
                    <FavoritesCard movie={oneFavorite} key={oneFavorite.id} />
                ))}
            </div>

            <div className="bg-home">
                <img src={MyMoviesImg} alt="bg-home" width="300px"></img>
            </div>
        </div>
    ) :
        <div>
            <ErrorPage />
        </div>
}

export default MyFavoritesPage;