/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { formatDate } from "../utils/dataNote";
function NoteBody({ title, body, createdAt }) {
  return (
    <div className="note-item-body">
      <h3 className="note-item-title">{title}</h3>
      <p className="note-item-date">{formatDate(createdAt)}</p>
      <p className="note-item-body">{body}</p>
    </div>
  );
}
export default NoteBody;
