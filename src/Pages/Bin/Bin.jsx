import React from "react";
import { Header, Sidenav, Card } from "../../components/index-component";
import { useNotes } from "../../Context/NoteContext";
import { toast } from "react-toastify";
import "./Bin.css";

const Bin = () => {
  const { state, dispatch } = useNotes();

  const deleteNotePermanently = (id) => {
    dispatch({ type: "DELETE_NOTE_PERMANENTLY", payload: id });
    toast.info("Note permanently deleted!", { autoClose: 500 });
  };

  return (
    <>
      <Header />
      <Sidenav />
      <div className="bin-container">
        {state.deletedNote.length === 0 ? (
          <div className="empty-container-message">
            <p>No Notes in Trash</p>
          </div>
        ) : (
          <div className="card-bin-element-section">
            {state.deletedNote.map((note) => (
              <Card
                key={note.id}
                title={note.title}
                content={note.content}
                onDelete={() => deleteNotePermanently(note.id)}
                id={note.id} 
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export { Bin };
