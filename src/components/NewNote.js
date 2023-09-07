import { useState } from "react";

const NewNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 250;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
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
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
