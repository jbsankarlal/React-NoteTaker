import Notes from "./Notes";
import NewNote from "./NewNote";

const NotePages = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-pages">
      {notes.map((note) => (
        <Notes
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <NewNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NotePages;
