import {NavLink} from "react-router-dom"
import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import DOMPurify from "dompurify";
import BlogFooter from "./BlogFooter"

// this component is for rendering the inner entries when blogs are listed out
export default function BlogEntry({ blog, auth }) {

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(blog.text),
  });

  const date = new Date(blog.createdAt);

  if (blog) {
    return (
      <div id="inner_entry_wrapper">
        <NavLink id="link-wrap" to={`/blog/${blog._id}`}>
        <Subtitle titleStr={blog.title} subtitleStr={blog.subtitle}></Subtitle>
        <Line></Line>
        <div className="author-details">
          <div className="author">
            <h2>Author: {blog.author.username}</h2>
          </div>
          <p className="date"> - {date.toLocaleString()}</p>
        </div>
        <Line></Line>
        <div className="blog-body-wrap">
        <div
          className="blog-entry-body linkNoUnderline"
          dangerouslySetInnerHTML={sanitizedData()}
        />
        </div>
        <div className="marg3">
          <Line></Line>
        </div>
        <div className="tags">
          <div>
            <p>Tags:</p>
          </div>
          {blog.tags.map((paragraph, index) => {
            return (
              <p className="tag" key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>
        </NavLink>
        <BlogFooter blog={blog} comments={false} auth={auth} />
      </div>
    );
  } else {
    return <></>
  }
}
