import { connect, useSelector } from "react-redux";
import Post from "./Post";
import { NavLink } from "react-router-dom";
import "./VariablePost.css";

function VariablePostWrap({ location, content}) {
  const auth = useSelector((state) => state.auth);

  if (auth.isAuthenticated) {
    return <Post location={location} content={content} />;
  } else {
    return (
      <div className="unverified-post">
        <h3 className="tagline">Want to start sharing your own thoughts?</h3>
        <h2 className="linkNoUnderline">
          <NavLink to="/signup">Signup</NavLink> or {" "}
          <NavLink to="/login">Login</NavLink> to join the conversation.
        </h2>
      </div>
    );
  }
}

const VariablePost = connect(null, null)(VariablePostWrap);

export default VariablePost;
