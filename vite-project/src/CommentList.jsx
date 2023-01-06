import {useState} from 'react';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';
// import EditComment from './EditComment';

function CommentList({comments, blogId}) {
    const [allComments, setComments] = useState([])
    // const [editedComment, setEditComment] = useState([])

    function handleAddNewComment(newComment) {
        setComments([...allComments, newComment])
    }

    // function handleEditComment(comment) {
    //     setEditComment([])
    

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
            <NewCommentForm onAddNewComment={handleAddNewComment} blogId ={blogId}/>
            {/* <EditComment onEditComment={handleEditNewComment} blogId ={blogId}/> */}
            
        </div>
    )
}


export default CommentList;