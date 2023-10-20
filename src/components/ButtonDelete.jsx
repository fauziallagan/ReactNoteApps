/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Swal from "sweetalert2";
function ButtonDelete({ id, onDelete }) {
  return (
    <button
      className="btn btn-danger "
      onClick={() =>
        onDelete(id)
          ? true
          : Swal.fire({
              icon: "success",
              title: "Note Telah Berhasil Terhapus",
              showConfirmButton: false,
              timer: 1500,
            })
      }
    >
      DELETE
    </button>
  );
}

export default ButtonDelete;
