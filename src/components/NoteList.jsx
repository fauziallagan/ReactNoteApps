/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleted }) {
  return (
    <div className="container">
      {notes.length === 0 ? (
        <p>Tidak ada Catatan</p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDeleted} {...note} />
        ))
      )}
      <hr />
    </div>
  );
}
export default NoteList;
