
import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify"

//redux
import { connect, useSelector } from "react-redux";

//https://overreacted.io/a-complete-guide-to-useeffect/
//https://www.robinwieruch.de/react-hooks-fetch-data/

export function BlogEntryS() {
  //dispatches for blogs
  const blogs = useSelector((state) => state.blogs)

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(blog.text)
  })

  let { blogId } = useParams();
  let blog = blogs.blogs.find(blog => blog._id === blogId)

  const date = new Date(blog.createdAt)

  if (blog) {
    return (
      <div key={blogId} id="inner_entry_wrapper">
        <Subtitle titleStr={blog.title} subtitleStr={blog.subtitle}></Subtitle>
        <div dangerouslySetInnerHTML={sanitizedData()} />
        <p className="date"> - {date.toLocaleString()}</p>
        <div className="marg3">
          <Line></Line>
        </div>
        <div className="tags">
          {blog.tags.map((paragraph, index) => {
            return (
              <p className="tag" key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Oops, there's nothing here! Better call Roz</div>;
  }
}

const BlogEntryStandalone = connect(null,null)(BlogEntryS);

export default BlogEntryStandalone