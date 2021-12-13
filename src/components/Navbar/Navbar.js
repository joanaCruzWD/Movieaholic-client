import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar({ userProp }) {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/favorite">
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
        {userProp && (
          <Link to="/profile" user={userProp}>
            <div className="profile-navbar">
              <img className="profile-img" src={userProp.image} alt="profile" />
              <h4>Welcome, {userProp.name}!</h4>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
