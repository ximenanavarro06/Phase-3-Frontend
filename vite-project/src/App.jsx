import {useState, useEffect} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import BlogList from "./BlogList";
import {Route, Switch} from "react-router-dom";
// import LikesList from "./LikesList";
// import YourBlogs from "./YourBlogs";

function App() {

  const [blogs, setBlogs] = useState([])

  function handleAddLike(addBlogToLikeList) {
    const blogsInLikeList = blogs.map((blog)=> {
      if (blog.id === addBlogToLikeList.id) {
          return addBlogToLikeList;
      } else {
        return blog;
      }
    })
    setBlogs(blogsInLikeList)
  }

  function handleDeleteLike(deleteBlogFromLikeList) {
    const deleteLike = blogs.filter((blog) => blog.id !== deleteBlogFromLikeList.id);
    setBlogs(deleteLike)
  }

  useEffect(()=> {
    fetch("http://localhost:9292/blogs")
    .then((r)=> r.json())
    .then((blogs)=> setBlogs(blogs))
  }, []);

  function handleDeleteBlog(id) {
    const postedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(postedBlogs);
  }

  // function handleAddLikeCount(id) {
  //   const 
  // }

  return (
    <div>
      <NavBar />
      <Header />
      <Switch>

        <Route exact path="/blogs">
          <BlogList
          blogs={blogs} onBlogDelete={handleDeleteBlog}
          onAddLike={handleAddLike}
          onDeleteLike={handleDeleteLike}
          />
        </Route>

        {/* <Route exact path="/likes">
          <LikesList 
          blogs={blogs}
          onAddLike={handleAddLike}
          onDeleteLike={handleDeleteLike}
          
          />
        </Route> */}

        {/* <Route exact path="/your_blogs">
          <YourBlogs
          />
        </Route> */}

      </Switch>
      
    </div>
  )
}


export default App
