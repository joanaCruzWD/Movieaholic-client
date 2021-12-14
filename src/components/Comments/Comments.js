import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import axios from "axios";

// import {
//     getComments as getCommentsApi,
//     createComment as createCommentApi,
//     updateComment as updateCommentApi,
//     deleteComment as deleteCommentApi,
// } from "../../api";

const apiURL = "http://localhost:5005/api";

function Comments({ favoriteId }) {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);

    const getComments = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`${apiURL}/favorite/${favoriteId}/comments`,
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
            await axios.post(`${apiURL}/favorite/${favoriteId}/comments`,
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
            await axios.put(`${apiURL}/favorite/${favoriteId}/${commentId}`,
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
            await axios.delete(`${apiURL}/favorite/${favoriteId}/${commentId}`,
                { headers: { Authorization: 'Bearer ' + token } });
            getComments()

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getComments()
    }, []);



    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
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