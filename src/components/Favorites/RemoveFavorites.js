
import React from 'react';

function RemoveFavorites({ movie, removeFavoriteMovie }) {

    //!!! Add a button to this
    return (
        <div>
            <button className="favorites-btn" onClick={() => { removeFavoriteMovie(movie.id) }} >
                Remove from favorites!
            </button>
        </div>
    );
}

export default RemoveFavorites;