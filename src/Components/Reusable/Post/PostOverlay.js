import React, {useState} from "react"
import VariablePost from "./VariablePost"
import "./PostOverlay.css"

export default function PostOverlay({auth}) {
const [postOpen, setPostOpen] = useState(false)    

    return (
        <div className="post-overlay">
            {postOpen? <div className="post-background"><VariablePost auth={auth}/></div> : <></>}
            <button className="post-button" onClick={() => setPostOpen(!postOpen)}>+</button>
        </div>
    )
}
