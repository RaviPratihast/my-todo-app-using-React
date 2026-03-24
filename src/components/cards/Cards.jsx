import React, { useEffect, useMemo, useRef, useState } from "react";
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
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const closeTimeoutRef = useRef(null);

  const isNotes = location.pathname === "/notes";
  const isArchive = location.pathname === "/archive";
  const isBin = location.pathname === "/bin";
  const plainTextContent = useMemo(() => {
    if (!props.content) {
      return "";
    }
    const tempElement = document.createElement("div");
    tempElement.innerHTML = props.content;
    return (tempElement.textContent || tempElement.innerText || "").trim();
  }, [props.content]);
  const shouldShowPreviewHint = isMobileView && plainTextContent.length > 40;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 780px)");
    const updateViewportFlag = (event) => {
      setIsMobileView(event.matches);
    };

    setIsMobileView(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateViewportFlag);
    return () => {
      mediaQuery.removeEventListener("change", updateViewportFlag);
    };
  }, []);

  useEffect(() => {
    if (!isDetailOpen) {
      return undefined;
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsDetailOpen(false);
      }
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    requestAnimationFrame(() => {
      setIsDetailVisible(true);
    });

    return () => {
      body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isDetailOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  function openDetailModal() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsDetailOpen(true);
  }

  function closeDetailModal() {
    setIsDetailVisible(false);
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsDetailOpen(false);
    }, 220);
  }

  function HandleDelete(event) {
    event.stopPropagation();
    props.onDelete(props.id);
  }

  function HandleRestore(event) {
    event.stopPropagation();
    dispatch({
      type: "RESTORE_NOTE",
      payload: props.id,
    });

    toast.success("Note restored!", { autoClose: 500 });
  }
  function HandleArchive(event) {
    event.stopPropagation();
    dispatch({
      type: "ARCHIVE_NOTE",
      payload: props.id,
    });
    toast.success("Note Archived!", { autoClose: 500 });
  }
  function HandleUnarchive(event) {
    event.stopPropagation();
    dispatch({
      type: "RESTORE_NOTE_FROM_ARCHIVE",
      payload: props.id,
    });
    toast.success("Note Unarchived!", { autoClose: 500 });
  }


  return (
    <>
    <div
      className="cards-container"
      role="button"
      tabIndex={0}
      onClick={openDetailModal}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openDetailModal();
        }
      }}
    >
      <h3>{props.title}</h3>

      <div className="card-content" dangerouslySetInnerHTML={{ __html: props.content }} />
      {shouldShowPreviewHint ? (
        <p className="card-preview-hint">Tap to view full note</p>
      ) : null}

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
    {isDetailOpen ? (
      <div
        className={`card-detail-overlay ${isDetailVisible ? "modal-open" : ""}`}
        onClick={closeDetailModal}
      >
        <div
          className="card-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Note details"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="card-detail-close"
            onClick={closeDetailModal}
            aria-label="Close note details"
          >
            x
          </button>
          <div className="card-detail-top">
            <h2>{props.title}</h2>
          </div>
          <div
            className="card-detail-content"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    ) : null}
    </>
  );
}

export { Card };
