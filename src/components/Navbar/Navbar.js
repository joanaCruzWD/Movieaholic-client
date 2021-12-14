import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import './../Navbar/Navbar.css'

function Navbar({ userProp }) {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <ul>
        <Link to="/">
          <li>
            <button className='Button'>Home</button>
          </li>
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/favorite">
              <li>
                <button className='Button'>Favorites</button>
              </li>
            </Link>
            <li>
              <button className='Button' onClick={logOutUser}>Logout</button>
            </li>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signup">
              <li>
                <button className='Button'>Sign Up</button>
              </li>
            </Link>

            <Link to="/login">
              <li>
                <button className='Button'>Login</button>
              </li>
            </Link>
          </>
        )}
        {isLoggedIn &&
          <div className="profile-img-wrapper">
            {userProp && (
              <Link to="/profile" user={userProp}>
                <div className="profile-navbar">
                  {userProp.image && <img className="profile-img" src={userProp.image} alt="profile" />}
                  <h4>Welcome, {userProp.name}.</h4>
                </div>
              </Link>
            )}
          </div>
        }
      </ul>
    </nav>
  );
}

export default Navbar;
