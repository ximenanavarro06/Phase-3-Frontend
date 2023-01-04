import React from 'react';

function BlogPost({blog, onBlogDelete}) {
const {id, title, description, like_count: likeCount, user_id: userId, created_at: createdAt} = blog;

function handleDeleteClick() {
    fetch(`http://localhost:9292/blogs/${id}`, {
        method: "DELETE",
    });
    onBlogDelete(id)
}

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
    </div>
)




}

export default BlogPost;
