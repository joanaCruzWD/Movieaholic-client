import { useState, useEffect, useContext } from "react";
import axios from "axios";
import MoviesCard from './../../components/Card/MoviesCard';
import Search from './../../components/Search/Search'
import FilterMovies from './../../components/FilterMovies/FilterMovies'
import { AuthContext } from "../../context/auth.context";


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

      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/movies/search/${queryParams}`,
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
    < >
      <div className='Home-Page-features'>
        {isLoggedIn &&
          <div className='search-bar-and-filter'>
            <Search setQueryParams={setQueryParams} />
          </div>
        }
        {isLoggedIn &&
          <FilterMovies moviesList={moviesList} setMoviesList={setMoviesList} />
        }
      </div>
      {!emptySearch ?
        (<div >
          <MoviesCard movies={moviesList} />
        </div>)
        :
        <h3> Sorry! You have to search for another movie 😢</h3>
      }
    </>

  )
}

export default HomePage;