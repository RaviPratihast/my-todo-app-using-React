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

  const filteredNotes = state.notes.filter((note) =>
    note.title.toLowerCase().startsWith(state.searchQuery)
  );
  return (
    <>
      <Sidenav />
      <div className="main-app-container">
        <Input onAdd={addNotes} />
        <div className="card-element-section">
          {filteredNotes.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { Notes };
