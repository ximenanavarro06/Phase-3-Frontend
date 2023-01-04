import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    borderColor: "black",
            border: "10px solid",
    color: "white",
    
    
  };

  const linkStyle = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    color: "white",
    borderColor: "black",
            border: "10px solid"
  };

function NavBar () {
    return (
        <header>
            <nav className="navigation">
        <div className="navBar">
            <NavLink className="routeButton"
                to="/blogs"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "grey"
                }}
            >
                All Blogs
            </NavLink>

            <NavLink className="routeButton"
                to="/likes"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "grey"
                }}
            >
                Your Likes
            </NavLink>

            <NavLink className="routeButton"
                to="/your_blogs"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "grey"
                }}
            >
                Your Posted Blogs
            </NavLink>
        </div>
        </nav>
        </header>
    );

}


export default NavBar;
