import Post from "./Post";
import { NavLink } from "react-router-dom";
import splash from "../../../data/photos/frontend/splash.png";
import "./VariablePost.css";

function VariablePost({ location, content, auth}) {
  

  if (auth.isAuthenticated) {
    if (localStorage.getItem("blog")) {
      let blog=JSON.parse(localStorage.getItem("blog"))
      return <Post location={location} content={content} title={blog.title} tags={blog.tags} text={blog.text} subtitle={blog.subtitle}/>;
    } else {
      return <Post location={location} content={content} />;
    }
  } else {
    return (
      <div className="unverified-post">
        <h3 className="tagline">Want to start sharing your own thoughts?</h3>
        <NavLink to="/signup">
        <div className="post-splash-container">
              <img
                className="splash"
                src={splash}
                alt="Splash page showing curlybrackets blog layout on both mobile and desktop."
              />
            </div>
            </NavLink>
        <h2 className="linkNoUnderline">
          <NavLink to="/signup">Signup</NavLink> or {" "}
          <NavLink to="/login">Login</NavLink> to join the conversation.
        </h2>
      </div>
    );
  }
}


export default VariablePost;
