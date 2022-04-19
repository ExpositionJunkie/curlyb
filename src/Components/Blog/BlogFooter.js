import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VariablePost from "../Reusable/Post/VariablePost";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./BlogFooter.css"

function BlogFooter({blog}) {
    const [commentActive, setCommentActive] = useState(false)
    
    const handleComment = (evt) => {
        evt.preventDefault()
        setCommentActive(true)
    }

    return (
        <div className="blog-footer-wrapper">
            <div className="blog-footer-icons">
            <FontAwesomeIcon icon={solid("reply")} className="shadow-icon blog-footer-icon" />
            <FontAwesomeIcon icon={solid("message")} className="shadow-icon blog-footer-icon" onClick={(evt) => handleComment(evt)}/>
            <FontAwesomeIcon icon={solid("pen-to-square")} className="shadow-icon blog-footer-icon"/>
            <FontAwesomeIcon icon={solid("eraser")} className="shadow-icon blog-footer-icon"/>
            </div>
            
        </div>
    )
}

function CommentDrop({blog, commentActive}) {
    if (commentActive) {
        return (
            <VariablePost location={`./blog/${blog._id}`}></VariablePost>
        )
    } else {
        return <></>
    }
}

export default BlogFooter