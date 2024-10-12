const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [action.payload, ...state.notes], 
      };

    case "DELETE_NOTE":
      const deletedNote = state.notes.find(
        (note) => note.id === action.payload
      ); 
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload), 
        deletedNote: [deletedNote, ...state.deletedNote],
      };

    case "DELETE_NOTE_PERMANENTLY":
      return {
        ...state,
        deletedNote: state.deletedNote.filter(
          (note) => note.id !== action.payload
        ),
      };

    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "RESTORE_NOTE":
      const restoredNote = state.deletedNote.find(
        (note) => note.id === action.payload
      );
      return {
        ...state,
        notes: [restoredNote, ...state.notes],
        deletedNote: state.deletedNote.filter(
          (note) => note.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export { notesReducer };
