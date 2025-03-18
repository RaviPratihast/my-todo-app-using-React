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
      case "DELETE_NOTE_FROM_ARCHIVE":
        const deletedNoteFromArchive = state.archive.find(
          (note) => note.id === action.payload
        );
        return {
          ...state,
          archive: state.archive.filter((note) => note.id !== action.payload),
          // notes: [deletedNoteFromArchive, ...state.notes],
          deletedNote: [deletedNoteFromArchive, ...state.deletedNote],
        };

    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };

      case "ARCHIVE_NOTE":
        const archivedNote = state.notes.find(
          (note) => note.id === action.payload
        );
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
          archive: [archivedNote, ...state.archive],
        };
  
      case "RESTORE_NOTE_FROM_ARCHIVE":
        const restoredArchiveNote = state.archive.find(
          (note) => note.id === action.payload
        );
        return {
          ...state,
          archive: state.archive.filter((note) => note.id !== action.payload),
          notes: [restoredArchiveNote, ...state.notes],
        };
        case "RESTORE_NOTE":
          const restoredNote = state.deletedNote.find(
            (note) => note.id === action.payload
          );
          return {
            ...state,
            deletedNote: state.deletedNote.filter((note) => note.id !== action.payload),
            notes: [restoredNote, ...state.notes],
          };
    default:
      return state;
  }
};

export { notesReducer };
