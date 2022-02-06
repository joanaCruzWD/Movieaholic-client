
import axios from 'axios';
import React, { useContext } from "react";


import { toast } from 'react-toastify';
import { AuthContext } from "../../context/auth.context";


function FavoriteBtn({ movie }) {
    const { isLoggedIn } = useContext(AuthContext);

    const addFavoriteMovie = async () => {

        try {
            const token = localStorage.getItem('authToken');
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/movie/favorite`,
                { movieId: movie.id },
                { headers: { Authorization: 'Bearer ' + token } });

            toast('Added to favorites ❤')

        } catch (error) {
            toast.error('You already have this movie!')
            console.log(error);
        }
    }

    return isLoggedIn && (
        <div>
            <button className="favorites-btn" onClick={addFavoriteMovie} >
                Add to favorites!
            </button>
        </div>
    );
}

export default FavoriteBtn;