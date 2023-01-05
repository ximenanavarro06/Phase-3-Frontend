import {useState} from 'react';

function NewCommentForm({onAddNewComment}) {
    const [commentForm, setCommentForm] = useState({
        content: "",
        blogId: "",
        userId: "",
    })

    function handleSubmit(event) {
        event.preventDefault();

    const newComment = {
        "content": commentForm.content,
        blogId: commentForm.blogId,
        userId: commentForm.userId
    };
    console.log(newComment);

    fetch('http://localhost:9292/comments', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment)
    })
    .then((r)=> r.json())
    .then((newComment)=> onAddNewComment(newComment))
        setCommentForm({
            content: ""
        })
    }

    function handleChange(event) {
        console.log(event.target.value);
        setCommentForm({...commentForm, [event.target.name]: event.target.value})
        console.log(commentForm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="content" placeholder="Add comment" onChange={handleChange} value={commentForm.content}/>
                <button type="submit">Post Comment</button>
            </form>
        </div>
    );
}

// function NewCommentForm({onAddNewComment}) {
//     const [commentForm, setCommentForm] = useState({
//         content: ""
//     })

//     function handleSubmit(event) {
//         event.preventDefault();

//     const newComment = {
//             content: commentForm.content
//         };

//     fetch('http://localhost:9292/comments', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//             body: JSON.stringify(newComment),
//     })
//        .then((r) => r.json())
//        .then((newComment) => onAddNewComment(newComment))
//        setCommentForm({
//             content: ""
//        })


//     }

//     function handleChange(event) {
//         console.log(event.target.value);
//         setCommentForm({...commentForm, [event.target.name]: event.target.value})
//     }

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" name="content" placeholder="Add comment" onChange={handleChange} value={commentForm.content}/>
    //             <button type="submit">Post Comment</button>
    //         </form>
    //     </div>
    // );

// }

export default NewCommentForm;