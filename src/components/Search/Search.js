import { useState } from 'react';
import React from 'react';

import './../Search/Search.css';

function Search({ setQueryParams }) {

    const [searchMovies, setSearchMovies] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setQueryParams(searchMovies);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input className="search-input" value={searchMovies} type="text" onChange={(event) => setSearchMovies(event.target.value)} />
                <button className="btnSearch">Search</button>
            </form>
        </div>
    );
}

export default Search;