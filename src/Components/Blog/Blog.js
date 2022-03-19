import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import {useNavigate} from "react-router-dom";

export default function BlogEntry({ blog }) {

    let navigate = useNavigate();

    if (blog) {
      return (
        <div id="inner_entry_wrapper" onClick={navigate(`/blog/${blog.id}`)} >
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
  