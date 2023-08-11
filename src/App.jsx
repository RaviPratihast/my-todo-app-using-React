import React, { useState } from "react";
import Header from "./components/Header/header.jsx";
import Input from "./components/Input/Input.jsx";
import Card from "./components/cards/Cards.jsx";

import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(newNote) {
    setNotes((prev) => {
      return [newNote, ...prev];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="main-app-container">
      <Header />
      <Input onAdd={addNotes} />
      <div className="card-element-section">
        {notes.map((item, index) => {
          return (
            <Card
              onDelete={deleteNote}
              key={index}
              id={index}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
