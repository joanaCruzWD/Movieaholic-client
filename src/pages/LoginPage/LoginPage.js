
import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

import './../LoginPage/LoginPage.css';

function LoginPage({ setIsUpdated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Get the function for saving and verifying the token
  const { logInUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { email, password };

      const authToken = localStorage.getItem("authToken");
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        requestBody,
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      const token = response.data.authToken;
      logInUser(token);
      setIsUpdated(true)
      navigate("/");
    } catch (error) {
      // If the request resolves with an error, set the error message in the state
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <div className="login-html">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <div>
          <button className='loginBtn' type="submit">Login</button>
        </div>

      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <div>
        <Link to={"/signup"}> Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
