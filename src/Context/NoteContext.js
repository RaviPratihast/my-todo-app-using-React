import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../Reducers/NotesReducer";
const NotesContext = createContext(null);

const useNotes = () => useContext(NotesContext);

let initialState = {
  notes: [],
  deletedNote: [],
  searchQuery: "",
};

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { useNotes, NotesProvider };
