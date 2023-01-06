import React from 'react';

function Comment ({comment}) {
    const {content, blog_id: blogId, user_id: userId} = comment;

    

    return (
        <>
        <p>Content: {content}</p>
        <p>Blog: {blogId}</p>
        <p>User: {userId}</p>
        </>
    )
}

export default Comment;