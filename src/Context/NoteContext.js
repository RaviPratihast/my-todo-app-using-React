import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../Reducers/NotesReducer";
const NotesContext = createContext(null);

const useNotes = () => useContext(NotesContext);

const DUMMY_NOTES = [
  {
    id: "note-default-1",
    title: "Sprint Planning",
    content:
      "<p>Finalize sprint backlog and lock delivery scope for this week.</p><ul><li>Review pending bugs</li><li>Confirm PR owners</li><li>Share deployment timeline</li></ul>",
  },
  {
    id: "note-default-2",
    title: "UI Polish Tasks",
    content:
      "<p>Refine cards and modal transitions for mobile and desktop parity.</p><p>Validate spacing with long text and list content.</p>",
  },
];

const DUMMY_ARCHIVE = [
  {
    id: "note-archive-1",
    title: "Release Notes Draft",
    content:
      "<p>Draft completed. Keep in archive until launch day.</p><ol><li>Feature summary</li><li>Bug fixes</li><li>Known limitations</li></ol>",
  },
];

const DUMMY_BIN = [
  {
    id: "note-bin-1",
    title: "Old Meeting Notes",
    content: "<p>Superseded by new architecture notes.</p>",
  },
];

let initialState = {
  notes: DUMMY_NOTES,
  deletedNote: DUMMY_BIN,
  archive: DUMMY_ARCHIVE,
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
