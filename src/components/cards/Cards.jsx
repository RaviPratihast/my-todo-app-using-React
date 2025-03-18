import React from "react";
import { useLocation } from "react-router-dom";
import { useNotes } from "../../Context/NoteContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "../index-component";
import { MdRestore } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { MdOutlineUnarchive } from "react-icons/md";
import { toast } from "react-toastify";
import "./cards.css";

function Card(props) {
  const location = useLocation();
  const { dispatch } = useNotes();

  const isNotes = location.pathname === "/notes";
  const isArchive = location.pathname === "/archive";
  const isBin = location.pathname === "/bin";

  function HandleDelete() {
    props.onDelete(props.id);
  }

  function HandleRestore() {
    dispatch({
      type: "RESTORE_NOTE",
      payload: props.id,
    });

    toast.success("Note restored!", { autoClose: 500 });
  }
  function HandleArchive() {
    dispatch({
      type: "ARCHIVE_NOTE",
      payload: props.id,
    });
    toast.success("Note Archived!", { autoClose: 500 });
  }
  function HandleUnarchive() {
    dispatch({
      type: "RESTORE_NOTE_FROM_ARCHIVE",
      payload: props.id,
    });
    toast.success("Note Unarchived!", { autoClose: 500 });
  }


  return (
    <div className="cards-container">
      <h3>{props.title}</h3>

      <div dangerouslySetInnerHTML={{ __html: props.content }} />

      <div className="card-button-container">
        {isNotes && (
          <Button onClick={HandleArchive} className="card-button">
            <BiArchiveIn />
          </Button>
        )}

        <Button onClick={HandleDelete} className="card-button">
          <DeleteIcon />
        </Button>
        {
          isArchive && (
            <Button onClick={HandleUnarchive} className="card-button">
              <MdOutlineUnarchive />
            </Button>
          )
        }

        {isBin && (
          <Button onClick={HandleRestore} className="card-button">
            <MdRestore />
          </Button>
        )}
      </div>
    </div>
  );
}

export { Card };
