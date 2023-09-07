import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotePages from "./components/NotePages";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    return (
      savedNotes || [
        {
          id: nanoid(),
          text: "this is the 1st note",
          date: "11/11/2023",
        },
        {
          id: nanoid(),
          text: "this is the 2nd note",
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
      ]
    );
  });

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotePages
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
