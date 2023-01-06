import {useState, useEffect} from 'react';
import CommentList from './CommentList';
// import LikesList from './LikesList';

function BlogPost({blog, onBlogDelete, comment,oneLike}) {
const {id, title, description, like_count: likeCount, created_at: createdAt, like} = blog;
// const {blog_id:blogId, content} = comment;
const [comments, setComments] = useState([])
// const {idd, user_id: userId2, blog_id: blogId2} = oneLike;
// const [inLikeList, setInLikeList] = useState(like)

// function handleLikeChange() {
//     setInLikeList((inLikeList)=> !inLikeList);
//     fetch(`http://localhost:9292/blogs/${id}`, {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({like: !like})
//     })
//     .then((r)=> r.json())
//     .then((addedToLikeList)=> setInLikeList ? onAddLike(addedToLikeList) : onDeleteLike(addedToLikeList))
// }

// function handleEditComment() {
//     fetch(`http://localhost:9292/comments`, {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             content: comment.content
//         })
//     })
// }

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



// useEffect(()=> {
//     fetch(`http://localhost:9292/likes/${id}`)
//     .then((r)=> r.json())
//     .then((inLikeList)=> setInLikeList(inLikeList))
    
// }, [])

function handleLikeChange() {

    let newLikeCount = likeCount + 1

    console.log(newLikeCount)

    fetch(`http://localhost:9292/blogs/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({like_count: newLikeCount})
    })
}

return (
    <div>
        
        <p>Posted at: {createdAt}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>Likes: {likeCount}</p>

        {/* {inLikeList ? (
            <button onClick={handleLikeChange}>Unlike</button>
            ) : (
            <button onClick={handleLikeChange}>Like</button>
            )} */}

        <button onClick={handleLikeChange}>Like</button>

        

        <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        <CommentList comments={comments} blogId ={blog.id} />
        {/* <LikesList inLikeList={inLikeList}/> */}
    </div>
)




}

export default BlogPost;
