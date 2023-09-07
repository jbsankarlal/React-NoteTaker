import { logDOM } from "@testing-library/react";
import { useState } from "react";

const NewNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
  };

  return (
    <div className="notes new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Write the note here"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="notes-footer">
        <small>200 remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
