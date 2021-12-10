import { useState } from 'react';
import { Input } from "antd";

function Search({ getAllTheMovies }) {

    const [searchMovies, setSearchMovies] = useState('');
    const handleSearch = (event) => {
        setSearchMovies(event.target.value);
        getAllTheMovies(event.target.value);
    }
    console.log(handleSearch);

    return (
        <div className="search-bar">
            <label>Search</label>
            <Input className="search-input" value={searchMovies} type="text" onChange={handleSearch} />
        </div>
    );
}

export default Search;