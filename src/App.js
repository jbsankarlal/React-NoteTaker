import { useState } from "react";
import { nanoid } from "nanoid";
import NotePages from "./components/NotePages";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is the 1st note",
      date: "11/11/2023",
    },
    {
      id: nanoid(),
      text: "this is the 2st note",
      date: "22/11/2023",
    },
    {
      id: nanoid(),
      text: "this is the 3rd note",
      date: "30/11/2023",
    },
    {
      id: nanoid(),
      text: "add new note",
      date: "30/11/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotePages notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
