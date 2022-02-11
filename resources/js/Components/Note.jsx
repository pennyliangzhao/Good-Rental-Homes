import React from "react";
import FlexStars from "./Stars";
import "../../css/Note.css"

function Note(props) {
    return (

        <div className="note">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <p>{props.content}</p>
                <FlexStars />
        </div>
    );
}

export default Note;
