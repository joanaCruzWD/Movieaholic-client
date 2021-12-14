
import axios from 'axios';
import React from 'react';

import { toast } from 'react-toastify';

// const apiURL = "http://localhost:5005";

function FavoriteBtn({ movie }) {
    const addFavoriteMovie = async () => {

        try {
            const token = localStorage.getItem('authToken');
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/movie/favorite`,
                { movieId: movie.id },
                { headers: { Authorization: 'Bearer ' + token } });

            toast('Added to favorites! ❤')

        } catch (error) {
            toast.error('You already have this movie!')
            console.log(error);
        }
    }


    //!!! Add a button to this
    return (
        <div>
            <button className="favorites-btn" onClick={addFavoriteMovie} >
                Add to favorites!
            </button>
        </div>
    );
}

export default FavoriteBtn;