import { connect, useSelector } from "react-redux";
import Post from "./Post";
import { NavLink } from "react-router-dom";
import "./VariablePost.css"

function VariablePostWrap({location}) {
    const auth = useSelector((state) => state.auth);
  
    if (auth.isAuthenticated) {
      return <Post location={location} />;
    } else {
      return (
        <div className="unverified-post">
          <h3 className="tagline">Want to start sharing your own thoughts?</h3>
          <h2>
            <div className="action-call-heading">
              <NavLink className="linkNoUnderline" to="/signup">Sign Up</NavLink> or{" "}
              <NavLink className="linkNoUnderline" to="/login">Log In</NavLink>
            </div>
          </h2>
        </div>
      );
    }
  }
  
  
const VariablePost = connect(null, null)(VariablePostWrap);

export default VariablePost