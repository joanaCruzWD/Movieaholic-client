import { useState } from 'react';
import React from 'react';
import './../FilterMovies/FilterMovies.css'

function FilterMovies({ moviesList, setMoviesList }) {

    const [option, setOption] = useState('');

    const handleSelect = (e) => {
        setOption(e.target.value)

        if (e.target.value === 'title') {
            sortByTitle()
        } if (e.target.value === 'releaseDate') {
            sortByDate()
        }
        if (e.target.value === 'voteAverage') {
            sortByRating()
        }
        if (e.target.value === 'popularity') {
            sortByPopularity()
        }
    }
    const sortByTitle = () => {
        const sortedTitle = [...moviesList].sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });
        setMoviesList(sortedTitle);
    }
    const sortByDate = () => {
        const sortedDate = [...moviesList].sort(function (a, b) {
            if (a.releaseDate > b.releaseDate) {
                return -1;
            }
            return 0;
        });
        setMoviesList(sortedDate);
    }
    const sortByRating = () => {
        const sortedRate = [...moviesList].sort(function (a, b) {
            if (a.voteAverage > b.voteAverage) {
                return -1;
            }
            return 0;
        });
        setMoviesList(sortedRate);
    }
    const sortByPopularity = () => {
        const sortedPopularity = [...moviesList].sort(function (a, b) {
            if (a.popularity > b.popularity) {
                return -1;
            }
            return 0;
        });
        setMoviesList(sortedPopularity);
    }

    //!add some css to this filter box

    return (
        <div className='filter'>
            <label>
                <select value={option} onChange={handleSelect}>
                    <option value='' defaultValue={option} disabled>Select</option>
                    <option value='title'>Title</option>
                    <option value='releaseDate'>Most recent</option>
                    <option value='voteAverage'>Rating</option>
                    <option value='popularity'>Popularity</option>
                </select>
            </label>
        </div>
    );
}

export default FilterMovies;