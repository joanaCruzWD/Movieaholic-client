import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import fileService from "../../services/file.service";
import './../SignupPage/SignupPage.css';

const API = process.env.REACT_APP_SERVER_URL;

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [imageUrl, setImageUrl] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = async (e) => {
    try {
      e.preventDefault();

      const requestBody = { email, password, name, image: imageUrl };

      const authToken = localStorage.getItem('authToken');
      await axios.post(
        `${API}/auth/signup`,
        requestBody,
        { headers: { Authorization: `Bearer ${authToken}` } }
      )
      navigate("/login");
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  const handleFileUpload = async (e) => {
    try {
      e.preventDefault();
      const uploadData = new FormData();
      uploadData.append("imageUrl", e.target.files[0]);

      const response = await fileService.uploadImage(uploadData);

      setImageUrl(response.data.secure_url);
      setAllowSubmit(true);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to upload the file");
    }
  };

  return (
    <div className="signup-html">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <input type="file" onChange={handleFileUpload} />

        <button type="submit" disabled={!allowSubmit}>Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
