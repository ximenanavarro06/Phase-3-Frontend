import {useState} from 'react';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';

function CommentList({comments}) {
    const [allComments, setComments] = useState([])

    function handleAddNewComment(newComment) {
        setComments([...allComments, newComment])
    }
    

    return (
        <div>
            <ul>
                {comments.map((comment)=> (<Comment
                key = {comment.id}
                comment={comment}
                
                // onCommentDelete={onCommentDelete}
                />
                    
                ))}
            </ul>
            <NewCommentForm onAddNewComment={handleAddNewComment}/>
        </div>
    )
}

export default CommentList;