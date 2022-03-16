import React, { useState } from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "./notes";
import CreateArea from "./CreateArea.jsx";

function App() {
    // Array of Notes
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(previousNotes => [...previousNotes, newNote]); 
    }

    function deleteNote(id) {
        setNotes(previousNotes => {
            return previousNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((note, index) => {
            return <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
            />
        })}
        <Footer />
    </div>
}

export default App;