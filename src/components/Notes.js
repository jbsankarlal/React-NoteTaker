import { MdDeleteForever } from "react-icons/md";

const Notes = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="notes">
      <span>{text}</span>

      <div className="notes-footer">
        <span>{date}</span>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)} // Call handleDeleteNote with the note's id
          className="delete"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Notes;
