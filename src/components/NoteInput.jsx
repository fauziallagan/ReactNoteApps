/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limitChar: 50,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitNotes = this.onSubmitNotes.bind(this);
  }

  onTitleChange(e) {
    this.setState(() => {
      return { title: e.target.value };
    });
  }
  onBodyChange(e) {
    this.setState(() => {
      return { body: e.target.value };
    });
  }
  onSubmitNotes(e) {
    e.preventDefault();

    this.props.addNote(this.state)
      ? true
      : Swal.fire({
          icon: "success",
          title: "Note Berhasil Ditambahkan!",
          showConfirmButton: false,
          timer: 1500,
        });
  }

  render() {
    return (
      <div className="container mb-3">
        <p className="head">
          sisa Karakter ={" "}
          {this.state.limitChar - this.state.title.length <= 0
            ? Swal.fire({
                icon: "warning",
                title: "Warning!",
                text: "Limit Karakter Melebihi batas!",
              })
            : this.state.limitChar - this.state.title.length}
        </p>
        <form className="container" onSubmit={this.onSubmitNotes}>
          <input
            type="text"
            placeholder="Tambahkan Judul...."
            value={this.state.title}
            onChange={this.onTitleChange}
            className="form-control-lg"
            required
          />
          <textarea
            type="text"
            rows={5}
            cols={50}
            placeholder="Tambahkan Catatan...."
            value={this.state.body}
            onChange={this.onBodyChange}
            className="form-control-lg"
            required
          />
          <button className="btn btn-success submit" type="submit">
            Tambah
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
