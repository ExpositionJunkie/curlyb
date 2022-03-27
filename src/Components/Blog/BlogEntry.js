import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";

// this component is for rendering the inner entries when blogs are listed out
export default function BlogEntry({ blog }) {
  if (blog) {
    return (
      <div id="inner_entry_wrapper">
        <Subtitle titleStr={blog.title} subtitleStr={blog.subtitle}></Subtitle>
        {blog.text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        <p className="date"> - {blog.date}</p>
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
