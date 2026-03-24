import React from "react";
import { Input, Card, Sidenav } from "../../components/index-component";
import "./Notes.css";
import { useNotes } from "../../Context/NoteContext";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Notes = () => {
  const { state, dispatch } = useNotes();
  const pageBackgroundStyle = {
    backgroundImage: `url("${process.env.PUBLIC_URL}/Dot grid@2x.png")`,
    backgroundRepeat: "repeat",
    backgroundSize: "420px auto",
    backgroundPosition: "center top",
  };
  const filteredNotes = state.notes.filter((note) =>
    note.title.toLowerCase().includes(state.searchQuery)
  );

  function addNotes(newNote) {
    dispatch({
      type: "ADD_NOTE",
      payload: { ...newNote, id: uuidv4() },
    });
    toast.success("Note created successfully!", { autoClose: 500 });
  }

  function deleteNote(id) {
    dispatch({
      type: "DELETE_NOTE",
      payload: id,
    });
    toast.info("Note moved to the bin.", { autoClose: 500 });
  }

  return (
    <>
      <Sidenav />
      <div className="main-app-container" style={pageBackgroundStyle}>
        <Input onAdd={addNotes} />
        <div className="card-element-section">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
              />
            ))
          ) : (
            <p className="empty-container-message">No notes found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export { Notes };
