import { nanoid } from "nanoid";
// actions.js

export const addNote = (text) => ({
  type: "ADD_NOTE",
  payload: {
    id: nanoid(),
    text,
    date: new Date().toLocaleDateString(),
  },
});

export const deleteNote = (id) => ({
  type: "DELETE_NOTE",
  payload: {
    id,
  },
});
