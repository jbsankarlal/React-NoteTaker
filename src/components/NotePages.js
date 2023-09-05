import Notes from "./Notes";
import NewNote from "./NewNote";

const NotePages = ({ notes }) => {
  return (
    <div className="note-pages">
      {notes.map((note) => (
        <Notes id={note.id} text={note.text} date={note.date} />
      ))}
      <NewNote />
    </div>
  );
};
export default NotePages;
