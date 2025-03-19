import React from "react";
import { Input, Card, Sidenav } from "../../components/index-component";
import "./Notes.css";
import { useNotes } from "../../Context/NoteContext";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Notes = () => {
  const { state, dispatch } = useNotes();

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
      <div className="main-app-container">
        <Input onAdd={addNotes} />
        <div className="card-element-section">
          {state.notes.map((note) => (
            <Card
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { Notes };
