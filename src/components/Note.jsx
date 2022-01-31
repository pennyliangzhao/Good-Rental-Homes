import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import notes from "../notes";
import {Stars, StarSharp} from "@material-ui/icons";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <StarSharp />
            </button>
            <button onClick={handleClick}>
                <StarSharp />
            </button>
            <button onClick={handleClick}>
                <StarSharp />
            </button>
            <button onClick={handleClick}>
                <StarSharp />
            </button>
            <button onClick={handleClick}>
                <StarSharp />
            </button>
        </div>
    );
}

export default Note;
