import  {useState, useEffect} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import BlogList from "./BlogList";
import {Route, Switch} from "react-router-dom"

function App() {

  const [blogs, setBlogs] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/blogs")
    .then ((r)=> r.json())
    .then((blogs)=> setBlogs(blogs))
  }, []);

  function handleDeleteBlog(id) {
    const postedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(postedBlogs);
  }

  return (
    <div>
      <NavBar />
      <Header />
      <Switch>

        <Route exact path="/blogs">
          <BlogList
          blogs={blogs} onBlogDelete={handleDeleteBlog}
          />
        </Route>

        <Route exact path="/likes">
          <LikesList
          />
        </Route>

        <Route exact path="/your_blogs">
          <YourBlogs 
          />
        </Route>

      </Switch>
      
    </div>
  )
}


export default App
