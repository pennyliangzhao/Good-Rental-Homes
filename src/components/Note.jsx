import React from "react";
import FlexStars from "./Stars";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <FlexStars></FlexStars>

        </div>
    );
}

export default Note;
