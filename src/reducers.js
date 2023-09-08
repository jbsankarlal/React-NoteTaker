const initialState = [];

export const notesReducer = (state = initialState, action) => {
  console.log("yes11");
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload.id);
    case "SET_NOTES":
      return action.payload;

    default:
      return state;
  }
};
