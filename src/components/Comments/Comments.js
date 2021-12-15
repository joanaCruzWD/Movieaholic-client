import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import axios from "axios";

import './../Comments/CommentForm.css'

function Comments({ favoriteId }) {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);

    const getComments = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/favorite/${favoriteId}/comments`,
                { headers: { Authorization: 'Bearer ' + token } });

            console.log(response.data);
            setBackendComments(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const addComment = async (text) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/favorite/${favoriteId}/comments`,
                { body: text },
                { headers: { Authorization: 'Bearer ' + token } });
            getComments()

        } catch (error) {
            console.log(error);
        }
    };

    const updateComment = async (text, commentId) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/favorite/${favoriteId}/${commentId}`,
                { body: text },
                { headers: { Authorization: 'Bearer ' + token } });
            getComments()
            setActiveComment(null)

        } catch (error) {
            console.log(error);
        }
    };

    const deleteComment = async (commentId) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/favorite/${favoriteId}/${commentId}`,
                { headers: { Authorization: 'Bearer ' + token } });
            getComments()

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getComments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <div className="comments-form-style">
            <h2 className="comments-title">Comments</h2>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <div className="comments-container">
                {backendComments.map((rootComment) => (
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        updateComment={updateComment}
                        deleteComment={() => deleteComment(rootComment.id)}
                        currentUserId={rootComment.currentUserId}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;