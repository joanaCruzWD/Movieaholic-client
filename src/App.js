import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'

import MyMoviesPage from './pages/Movies/MyMoviesPage'

import IsPrivate from './components/IsPrivate/IsPrivate'
import IsAnon from './components/IsAnon/IsAnon'


function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Routes for the user */}
        <Route path='/profile' element={<IsPrivate> <ProfilePage /> </IsPrivate>} />

        <Route path='/signup' element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path='/login' element={<IsAnon> <LoginPage /> </IsAnon>} />


        {/* Routes for the movies */}
        <Route path='/myMoviesList' element={<IsPrivate> <MyMoviesPage /> </IsPrivate>} />

        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </div>
  );
}

export default App;
