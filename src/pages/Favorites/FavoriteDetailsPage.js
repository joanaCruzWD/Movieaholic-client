
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import FavoritesCard from './../../components/Card/FavoritesCard';
import ErrorPage from './../ErrorPage/ErrorPage';

import Comments from "./../../components/Comments/Comments";

// import CommentsBlock from 'simple-react-comments';

// const apiURL = "http://localhost:5005/api";




function FavoriteDetailsPage() {
    const [favoriteDetails, setFavoriteDetails] = useState([]);
    const [error, setError] = useState(false);
    // const [comments, setComments] = useState(data)

    const { favoriteId } = useParams();

    const oneFavoriteDetails = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/favorite/${favoriteId}`,
                { headers: { Authorization: 'Bearer ' + token } });
            setFavoriteDetails(response.data);
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    useEffect(() => {
        oneFavoriteDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return !error ? (
        <>
            <div className='all-movies-displayed'>
                <FavoritesCard favorite={favoriteDetails} key={favoriteDetails.id} />
            </div>
            <div style={{ width: "fit-content", display: "inline-flex" }}>
                <Comments favoriteId={favoriteId} />
            </div>
        </>
    )
        :
        <ErrorPage />
}

export default FavoriteDetailsPage;
