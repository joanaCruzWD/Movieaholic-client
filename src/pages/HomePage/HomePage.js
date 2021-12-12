import { useState, useEffect } from "react";
import axios from "axios";
import bgHomePage from '../../images/HomePage-BG.png';
import MoviesCard from './../../components/Card/MoviesCard';
import Search from './../../components/Search/Search'
import FilterMovies from './../../components/FilterMovies/FilterMovies'

const apiURL = "http://localhost:5005";

function HomePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [queryParams, setQueryParams] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);

  const getAllTheMovies = async () => {
    try {
      const token = localStorage.getItem('authToken');

      const response = await axios.get(`${apiURL}/api/popularMovies`,
        { headers: { Authorization: 'Bearer ' + token } });
      setMoviesList(response.data);

    } catch (error) {
      console.log(error);
    }
  }
  const searchMovie = async () => {
    try {
      const token = localStorage.getItem('authToken');

      const response = await axios.get(`${apiURL}/api/movies/search/${queryParams}`,
        { headers: { Authorization: 'Bearer ' + token } });
      const data = response.data;
      if (data.length === 0) {
        setEmptySearch(true)
      } else {
        setEmptySearch(false)
      }
      setMoviesList(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTheMovies();
  }, [])

  useEffect(() => {
    if (queryParams !== '') {
      searchMovie()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams])

  return (
    <div className='Home-Page-features'>

      <div className='title-and-search'>
        <div className="title-home">
          <h1>Movieaholic</h1>
        </div>

        <div className='search-bar-and-filter'>
          <Search setQueryParams={setQueryParams} />
        </div>
      </div>

      <FilterMovies moviesList={moviesList} setMoviesList={setMoviesList} />


      {!emptySearch ?
        (<div className='all-movies-displayed'>

          {moviesList.map((oneMovie) => (
            <MoviesCard movie={oneMovie} key={oneMovie.id} />
          ))}

        </div>)
        :
        <h3> Sorry! You have to search for another movie 😢</h3>
      }

      <div className="bg-home">
        <img src={bgHomePage} alt="bg-home" width="200px"></img>
      </div>

    </div >
  )
}

export default HomePage;