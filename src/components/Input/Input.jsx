import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "../index-component";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Input.css";

const toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ align: [] }],
  [{ color: [] }, { background: [] }],
  ["link", "image"],
  ["clean"],
];
const modules = {
  toolbar: toolbarOptions,
};

function Input(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleContentChange(value) {
    setNote((prev) => ({
      ...prev,
      content: value,
    }));
  }

  function handleClick() {
    if (!note.title || !note.content) {
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="input-container">
      <input
        value={note.title}
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <ReactQuill
        value={note.content}
        onChange={handleContentChange}
        modules={modules}
        placeholder="Content..."
      />
      <Button onClick={handleClick} className="add-button">
        <AddIcon className="add-icon" />
      </Button>
    </div>
  );
}

export { Input };
