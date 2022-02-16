import { useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

function EditFav({ show, handleShow, handleClose, clickedMovie }) {
  const commentRef = useRef();
  async function editComment(clickedMovie) {
    const newComment = commentRef.current.value;
    clickedMovie.comment = newComment;
    const url = `https://movies-appj.herokuapp.com/udpateFavMovie/${clickedMovie.id}`;
    const sentMovie = {
      title: clickedMovie.title,
      release_date: clickedMovie.releasedate,
      poster_path: clickedMovie.posterpath,
      overview: clickedMovie.overview,
      comment: clickedMovie.comment,
    };
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sentMovie),
    });
    Swal.fire("Done!", "Your comment has been edited", "success");
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Edit the Comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Label htmlFor="inputPassword5">New Comment</Form.Label>
          <Form.Control ref={commentRef} type="text" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editComment(clickedMovie)}>
            Update Comment
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default EditFav;
