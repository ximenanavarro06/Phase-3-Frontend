import {useState, useEffect} from 'react';
import CommentList from './CommentList';

function BlogPost({blog, onBlogDelete}) {
const {id, title, description, like_count: likeCount, user_id: userId, created_at: createdAt} = blog;
const [comments, setComments] = useState([])

function handleDeleteClick() {
    fetch(`http://localhost:9292/blogs/${id}`, {
        method: "DELETE",
    });
    onBlogDelete(id)
}

useEffect(()=> {
    fetch(`http://localhost:9292/comments/${id}`)
    .then((r)=> r.json())
    .then((comments)=> setComments(comments))
    
}, [comments.id])

return (
    <div>
        <p>Username: {userId}</p>
        <p>Posted at: {createdAt}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>Likes: {likeCount}</p>
        <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        <CommentList comments={comments}/>
    </div>
)




}

export default BlogPost;
