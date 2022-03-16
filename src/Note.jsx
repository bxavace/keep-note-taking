import React from "react";
import DeleteIcon from '@material-ui/icons/Delete.js';



function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    return <div className="note">
        <h1 name="title">{props.title}</h1>
        <p name="content">{props.content}</p>
        <button onClick={handleClick}>
            <DeleteIcon />
        </button>
    </div>
}
export default Note;