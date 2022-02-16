import React from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { useRef } from "react";

function ModalMovie({ show, handleClose, clickedMovie, updateMovie }) {
  const commentRef = useRef();

  function handleComment(e) {
    e.preventDefault();
    const comment = commentRef.current.value;

    const newMovie = { ...clickedMovie, comment };
    updateMovie(newMovie, clickedMovie.id);
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {clickedMovie.title ? clickedMovie.title : "Some Title"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${clickedMovie.poster_path}`}
        />
        {clickedMovie.overview}
      </Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Leave a comment</Form.Label>
            <Form.Control
              ref={commentRef}
              type="text"
              placeholder="Add your comment"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleComment}>
            Add
          </Button>
        </Form>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
