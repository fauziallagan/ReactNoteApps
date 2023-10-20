/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteBody from "./NoteBody";
import ButtonDelete from "./ButtonDelete";
function NoteItem({ title, body, createdAt, id, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item-content">
        <NoteBody title={title} body={body} createdAt={createdAt} />
      </div>
      <div className="note-item-action">
        <ButtonDelete id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
