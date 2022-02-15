import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";
import "./Movie.css";
function Movie({ movie }) {
  const [show, setShow] = useState(false);
  const [clickedMovie, setClickedMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleShowModal(movie) {
    handleShow();
    setClickedMovie(movie);
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movie.title ? movie.title : "Some Title"}</Card.Title>
          <Button
            variant="primary"
            onClick={() => {
              handleShowModal(movie);
            }}
          >
            Show Modal
          </Button>
          <Button variant="secondary">Add to Favorites </Button>
        </Card.Body>
      </Card>
      {clickedMovie && (
        <ModalMovie
          show={show}
          handleClose={handleClose}
          clickedMovie={clickedMovie}
        />
      )}
    </>
  );
}

export default Movie;
