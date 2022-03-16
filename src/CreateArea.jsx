import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add.js';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setNote(previousValue => {
            return {
                ...previousValue,
                [name]: value
            }
        })
    }
    
    function expand() {
        setExpanded(true);
    }

    const enabled = note.title.length > 0 && note.content.length > 0;

    return (
    <div>
        <form className="create-note" onSubmit={(e) => {
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
            e.preventDefault();
        }}>
            {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" className="title"/>}
            <textarea onClick={expand} onChange={handleChange} name="content" value={note.content} placeholder="Take a note... Click '+' after filling out Title and Content" rows={isExpanded ? 3 : 1} />

            <Zoom in={isExpanded}>
                <Fab type="submit" disabled={!enabled}>
                <AddIcon />
                </Fab>
            </Zoom>
        </form>
    </div>
    );
}

// Notes on <button disabled=... //
// https://stackoverflow.com/questions/30187781/how-to-disable-a-button-when-an-input-is-empty

export default CreateArea;