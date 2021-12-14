import { useState, useEffect, useContext } from "react";
import axios from "axios";
import bgHomePage from '../../images/BG.jpg';
import MoviesCard from './../../components/Card/MoviesCard';
import Search from './../../components/Search/Search'
import FilterMovies from './../../components/FilterMovies/FilterMovies'
import { AuthContext } from "../../context/auth.context";

const apiURL = "http://localhost:5005";

function HomePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [queryParams, setQueryParams] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

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
      {isLoggedIn &&
        <div className='search-bar-and-filter'>
          <Search setQueryParams={setQueryParams} />
        </div>
      }
      {isLoggedIn &&
        <FilterMovies moviesList={moviesList} setMoviesList={setMoviesList} />
      }

      {!emptySearch ?
        (<div className='all-movies-displayed'>

          {moviesList.map((oneMovie) => (
            <MoviesCard movie={oneMovie} key={oneMovie.id} />
          ))}

        </div>)
        :
        <h3> Sorry! You have to search for another movie 😢</h3>
      }

    </div >
  )
}

export default HomePage;