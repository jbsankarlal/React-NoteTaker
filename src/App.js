import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotePages from "./components/NotePages";
import Search from "./components/Search";
import Header from "./components/Header";
import { addNote, deleteNote } from "./actions";

const App = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  // Load data from localStorage when the app starts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      dispatch({ type: "SET_NOTES", payload: savedNotes });
    }
  }, [dispatch]);

  useEffect(() => {
    const beforeUnloadHandler = () => {
      localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);

    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, [notes]);

  const handleAddNote = (text) => {
    dispatch(addNote(text));
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotePages
        notes={filteredNotes}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
};

export default App;
