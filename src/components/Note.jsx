import React from "react";
import FlexStars from "./Stars";
import "./Note.css"

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (

        <div className="note">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <p>{props.content}</p>
                <FlexStars></FlexStars>
        </div>
    );
}

export default Note;
