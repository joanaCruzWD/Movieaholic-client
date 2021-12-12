import { useState } from 'react';
import React from 'react';

function Search({ setQueryParams }) {

    const [searchMovies, setSearchMovies] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setQueryParams(searchMovies);
    }

    //! add style to the search bar and try to catch the number of results searched for something

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input className="search-input" value={searchMovies} type="text" onChange={(event) => setSearchMovies(event.target.value)} />
                <button>Search</button>
            </form>
        </div>
    );
}

export default Search;