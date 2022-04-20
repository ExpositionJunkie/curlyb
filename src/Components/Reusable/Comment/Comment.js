import Line from "../Line/Line";
import DOMPurify from "dompurify";
import "./Comment.css";

export default function Comment({ comment }) {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(comment.text),
  });

  const date = new Date(comment.createdAt);

  if (comment) {
    return (
      <>
        <Line></Line>
        <div className="comment-body-wrap">
          <div
            className="comment-entry-body"
            dangerouslySetInnerHTML={sanitizedData()}
          />
        
        <div className="comment-author-details">
          <div className="comment-author">
            <p>Author: {comment.author.username}</p>
          </div>
          <p className="date"> - {date.toLocaleString()}</p>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
