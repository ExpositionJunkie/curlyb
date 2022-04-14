import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import DOMPurify from "dompurify";

// this component is for rendering the inner entries when blogs are listed out
export default function BlogEntry({ blog }) {

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(blog.text)
  })

  const date = new Date(blog.createdAt)

  if (blog) {
    return (
      <div id="inner_entry_wrapper">
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
