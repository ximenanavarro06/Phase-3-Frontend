// import {useState} from 'react'

// function EditComment({blogId, onEditComment}) {
//     const [editComment, setEditComment] = useState({
//         content: "",
//         blogId: blogId,
//     })

//     function handleSubmit(event) {
//         event.preventDefault();

//     const editNewComment = {
//         content: editComment.content,
//         blog_id: editComment.blogId,
//     };

//     fetch(`http://localhost:9292/comments/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(editNewComment)
//     })
//        .then((r) => r.json())
//        .then( (editNewComment)=> onEditComment(editNewComment))
//             setEditComment({
//                 content: ""
//             })
// }

//     function handleChange(event) {
//         console.log(event.target.name);

//         setEditComment({...editComment, [event.target.name]: event.target.value})
//     }

//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="content" placeholder="Edit Comment" onChange={handleChange} value= {editComment.content} />
//             <button type="submit">Post Updated Comment</button>
//         </form>
//         </>
//     )
// }

// export default EditComment;