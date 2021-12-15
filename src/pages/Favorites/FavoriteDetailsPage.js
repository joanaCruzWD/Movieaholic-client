
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
                <FavoritesCard movie={favoriteDetails} key={favoriteDetails.id} />
            </div>
            <div style={{ width: "fit-content", display: "inline-flex" }}>
                {/* <CommentsBlock
                    isLoggedIn={true}
                    comments={comments}
                    onSubmit={text => {
                        if (text.length > 0) {
                            setComments(oldComments => [...oldComments,
                            {
                                avatarUrl: '"https://ui-avatars.com/api/name=LadyBug&background=random"',
                                createdAt: new Date(),
                                fullName: 'Lady Bug',
                                text,
                            }],
                            );
                        }
                    }}
                /> */}
                <Comments favoriteId={favoriteId} />
            </div>
        </>
    )
        :
        <ErrorPage />
}

export default FavoriteDetailsPage;


// //!!DELETE THIS!!!
// const data = [
//     {
//         createdAt: new Date(),
//         "fullName": "Riya Negi",
//         "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
//         "text": "Hey, Loved your blog! ",

//     },
//     {
//         createdAt: new Date(),
//         "fullName": "Lily",
//         "avatarUrl": "https://ui-avatars.com/api/name=Lily&background=random",
//         "text": "I have a doubt about the 4th point🤔",
//     },
//     // {
//     //     "userId": "01c",
//     //     "comId": "018",
//     //     "fullName": "Derek",
//     //     "text": "Great explanation!!!",
//     //     "avatarUrl": "https://ui-avatars.com/api/name=Derek&background=random"
//     // }
// ]