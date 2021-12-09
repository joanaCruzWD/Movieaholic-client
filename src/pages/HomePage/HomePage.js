import { useState, useEffect } from "react";
import axios from "axios";
import bgHomePage from '../../images/HomePage-BG.png';
import MoviesCard from './../../components/Card/MoviesCard';

const apiURL = "http://localhost:5005";


const handleChange = () => {

}

function HomePage() {
  const [moviesList, setMoviesList] = useState([]);

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

  useEffect(() => {
    getAllTheMovies();
  }, [])

  return (
    <div>
      <div className="title-home">
        <h1>Movieaholic</h1>
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Search 🔍' />
      </div>
      <div className='filter-movies'>
        <select value={''} onChange={handleChange} > {/*NEED TO DO THIS ONCHANGE */}
          <option value='title'>Title</option>
          <option value='release_date'>Release date</option>
          <option value='rating'>Rating</option>
          <option value='popularity'>Popularity</option>
        </select>
        <div className='all-movies-displayed'>
          {moviesList.map((oneMovie) => (
            <MoviesCard movie={oneMovie} key={oneMovie.id} />
          ))}
        </div>
      </div>
      <div className="bg-home">
        <img src={bgHomePage} alt="bg-home" width="200px"></img>
      </div>
    </div>
  );
}

export default HomePage;