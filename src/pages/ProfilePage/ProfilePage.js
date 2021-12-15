import axios from "axios";
import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fileService from "../../services/file.service";

import './../ProfilePage/ProfilePage.css';

function ProfilePage({ setIsUpdated }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/current`,
        { headers: { Authorization: 'Bearer ' + token } });

      const user = response.data;

      setName(user.name);
      setEmail(user.email);
      setImageUrl(user.image);

    } catch (error) {
      console.log(error);
    }
  }

  const editName = async (e) => {
    setName(e.target.value);
  }

  const editUser = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem('authToken');
      const requestBody = { name, email, image: imageUrl };

      const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/users/current`,
        requestBody,
        { headers: { Authorization: 'Bearer ' + token } });
      const user = response.data;


      setName(user.name);
      setEmail(user.email);
      setImageUrl(user.image);

      setIsUpdated(true)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileUpload = async (e) => {
    try {
      e.preventDefault();
      const uploadData = new FormData();
      uploadData.append("imageUrl", e.target.files[0]);

      const requestBody = { email, name, image: imageUrl };
      const authToken = localStorage.getItem('authToken');
      const response = await fileService.uploadImage(uploadData,
        requestBody,
        { headers: { Authorization: `Bearer ${authToken}` } })

      setImageUrl(response.data.secure_url);
      setIsUpdated(false)
    } catch (error) {
      console.log(error);
      setErrorMessage('');
    }
  };

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    handleFileUpload();
    setIsUpdated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="profile-update">
      <h1>Profile Page</h1>
      <form onSubmit={editUser}>

        <img src={imageUrl} alt='img-profile-page' width="175px" />
        <input type="file" onChange={handleFileUpload} />

        <label>Name: </label>
        <input value={name} type="text" onChange={editName} />

        <label>email: </label>
        <input value={email} type='text' disabled="disabled" />


        <button type="submit"> Edit profile</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ProfilePage;

//!Check this page! need to do some changes