import React from 'react';
import BlogPost from './BlogPost';
// import Search from './Search';


function BlogList({blogs, onBlogDelete, }) {
    

    return (
        <div>
            <ul>
                {blogs.map((blog)=> (<BlogPost
                key = {blog.id}
                blog={blog}
                onBlogDelete={onBlogDelete}
                


                // onAddLike={onAddLike}
                // onDeleteLike={onDeleteLike}
                
                />
                    
                ))}
            </ul>
        </div>
    )
}

export default BlogList;