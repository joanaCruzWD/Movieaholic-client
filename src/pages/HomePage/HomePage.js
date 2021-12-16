import { useState, useEffect, useContext } from "react";
import axios from "axios";
import HomePageCards from '../../components/Card/HomePageCards';
import Search from './../../components/Search/Search'
import FilterMovies from './../../components/FilterMovies/FilterMovies'
import { AuthContext } from "../../context/auth.context";

import './../HomePage/HomePage.css';
const API = process.env.REACT_APP_SERVER_URL;

function HomePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [queryParams, setQueryParams] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  const getAllTheMovies = async () => {
    try {
      const token = localStorage.getItem('authToken');

      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/popularMovies`,
        { headers: { Authorization: 'Bearer ' + token } });
      setMoviesList(response.data);

    } catch (error) {
      console.log(error);
    }
  }
  const searchMovie = async () => {
    try {
      const token = localStorage.getItem('authToken');

      const response = await axios.get(`${API}/api/movies/search/${queryParams}`,
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

  return isLoggedIn && (
    <>
      <div className='search-bar-and-filter'>
        <Search setQueryParams={setQueryParams} />
      </div>

      <FilterMovies moviesList={moviesList} setMoviesList={setMoviesList} />

      {!emptySearch ?
        (<div >
          <HomePageCards movies={moviesList} />
        </div>)
        :
        <div className="warning">
          <h1> Sorry! You have to search for another movie</h1>
        </div>
      }
    </>

  )
}

export default HomePage;