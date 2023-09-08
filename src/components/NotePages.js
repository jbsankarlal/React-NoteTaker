import React from "react";
import Notes from "./Notes";
import NewNote from "./NewNote";

const NotePages = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-pages">
      {notes.length === 0 ? (
        <p>No matching notes found.</p>
      ) : (
        notes.map((note) => (
          <Notes
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))
      )}
      <NewNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotePages;
