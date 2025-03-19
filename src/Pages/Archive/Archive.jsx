import React from "react";
import { Sidenav, Card } from "../../components/index-component";
import { useNotes } from "../../Context/NoteContext";
import { toast } from "react-toastify";
import "./Archive.css";

const Archive = () => {
  const { state, dispatch } = useNotes();
  console.log(state.archive);

  function deleteNote(id) {
    dispatch({
      type: "DELETE_NOTE_FROM_ARCHIVE",
      payload: id,
    });

    toast.info("Note moved to the bin.", { autoClose: 500 });
  }


  return (
    <>
      <Sidenav />
      <div className="archive-container">
        {state.archive.length === 0 ? (
          <p className="empty-container-message">No Notes in Archive</p>
        ) : (
          <div className="card-bin-element-section">
            {state.archive.map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export { Archive };
