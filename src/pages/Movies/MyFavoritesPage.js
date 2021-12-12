import MyMoviesImg from '../../images/MyMovies.png';
import axios from "axios";
import { useState, useEffect } from "react";
import FavoritesCard from './../../components/Card/FavoritesCard';

const apiURL = "http://localhost:5005/api";

function MyFavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    const myFavoritesList = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${apiURL}/favorite`,
                { headers: { Authorization: 'Bearer ' + token } });
            setFavorites(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        myFavoritesList()
    }, [])

    return (favorites.length > 0) ? (
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
        <h3> Sorry, no favorites added to this list yet!</h3>
}

export default MyFavoritesPage;