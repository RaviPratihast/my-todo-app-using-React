import React from "react";
import { Sidenav, Card } from "../../components/index-component";
import { useNotes } from "../../Context/NoteContext";
import { toast } from "react-toastify";
import "./Bin.css";

const Bin = () => {
  const { state, dispatch } = useNotes();
  const pageBackgroundStyle = {
    backgroundImage: `url("${process.env.PUBLIC_URL}/Dot grid@2x.png")`,
    backgroundRepeat: "repeat",
    backgroundSize: "420px auto",
    backgroundPosition: "center top",
  };

  const deleteNotePermanently = (id) => {
    dispatch({ type: "DELETE_NOTE_PERMANENTLY", payload: id });
    toast.info("Note permanently deleted!", { autoClose: 500 });
  };

  return (
    <>
      <Sidenav />
      <div className="bin-container" style={pageBackgroundStyle}>
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
