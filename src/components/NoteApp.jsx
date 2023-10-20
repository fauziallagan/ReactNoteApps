/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import NoteList from "./NoteList";
import { noteData } from "../utils/dataNote";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: noteData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotes = this.onAddNotes.bind(this);
  }

  onAddNotes({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="body-note-app ">
        <h1 className="head">Note Apps Submission</h1>
        <NoteInput addNote={this.onAddNotes} />
        <h2 className="header">Daftar Note</h2>
        <hr />
        <NoteList
          notes={this.state.notes}
          onDeleted={this.onDeleteHandler}
          onArchive={this.onArchive}
        />
        <hr />
        <h2 className="head">Archived</h2>
        <p className="header">Coming Soon :)</p>
      </div>
    );
  }
}

export default NoteApp;
