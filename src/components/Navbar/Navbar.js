import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/myMoviesList">
            <button>Favorites</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}

      <div className="profile-img-wrapper">
        {user && (
          <Link to="/profile">
            <div className="profile-navbar">
              <img className="profile-img" src={user.image} alt="profile" />
              <h4>Welcome, {user.name}!</h4>
            </div>

          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
