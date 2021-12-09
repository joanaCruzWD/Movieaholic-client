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

import IsPrivate from './components/IsPrivate/IsPrivate'
import IsAnon from './components/IsAnon/IsAnon'
import Footer from './components/Footer/Footer'


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
        <Route path='/movieDetails/:movieId' element={<IsPrivate> <MovieDetailsPage /> </IsPrivate>} />

        <Route path='*' element={<ErrorPage />} />

      </Routes>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
