import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import GoToTop from './components/GoToTop/GoToTop'

import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import MovieDetailsPage from './pages/Movies/MovieDetailsPage'
import MyFavoritesPage from './pages/Favorites/MyFavoritesPage'
import FavoriteDetailsPage from './pages/Favorites/FavoriteDetailsPage';


import IsPrivate from './components/IsPrivate/IsPrivate'
import IsAnon from './components/IsAnon/IsAnon'
import Footer from './components/Footer/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from "axios";

// const apiURL = "http://localhost:5005/api";

function App() {
  const [user, setUser] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/current`,
        { headers: { Authorization: 'Bearer ' + token } });

      const user = response.data;
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [isUpdated]);

  return (
    <div className='App'>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      />
      <div style={{ width: '100%', }}>
        <Navbar userProp={user} />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* Routes for the user */}
          <Route path='/profile' element={<IsPrivate> <ProfilePage setIsUpdated={setIsUpdated} /> </IsPrivate>} />
          <Route path='/signup' element={<IsAnon> <SignupPage /> </IsAnon>} />
          <Route path='/login' element={<IsAnon> <LoginPage /> </IsAnon>} />


          {/* Routes for the movies */}
          <Route path='/movieDetails/:movieId' element={<IsPrivate> <MovieDetailsPage /> </IsPrivate>} />
          <Route path='/favorite' element={<IsPrivate> <MyFavoritesPage /> </IsPrivate>} />
          <Route path='/favorite/:favoriteId' element={<IsPrivate> <FavoriteDetailsPage /> </IsPrivate>} />


          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </div>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
