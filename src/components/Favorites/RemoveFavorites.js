
import React from 'react';

function RemoveFavorites({ movie, removeFavoriteMovie }) {

    return (
        <div>
            <button className="favorites-btn" onClick={() => removeFavoriteMovie(movie.id)} >
                Remove from favorites!
            </button>
        </div>
    );
}

export default RemoveFavorites;