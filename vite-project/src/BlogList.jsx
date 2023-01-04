import React from 'react';
import BlogPost from './BlogPost';

function BlogList({blogs, onBlogDelete}) {
    

    return (
        <div>
            <ul>
                {blogs.map((blog)=> (<BlogPost
                key = {blog.id}
                blog={blog}
                onBlogDelete={onBlogDelete}
                />
                    
                ))}
            </ul>
        </div>
    )
}

export default BlogList;