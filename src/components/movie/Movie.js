import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";
import "./Movie.css";
import Swal from "sweetalert2";
function Movie({ movie, updateMovie }) {
  const [show, setShow] = useState(false);
  const [clickedMovie, setClickedMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleShowModal(movie) {
    handleShow();
    setClickedMovie(movie);
  }

  async function handleAddFav(movie) {
    const url = `https://movies-appj.herokuapp.com/addMovie`;
    const sentMovie = {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      overview: movie.overview,
      comment: movie.comment,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sentMovie),
    });
    Swal.fire("Done!", "Movie was added to the favorites list", "success");
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
          <Card.Text>
            {" "}
            User Comments:
            {movie.comment ? movie.comment : " No Comments Added"}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleShowModal(movie);
            }}
          >
            Show Modal
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleAddFav(movie);
            }}
          >
            Add to Favorites{" "}
          </Button>
        </Card.Body>
      </Card>
      {clickedMovie && (
        <ModalMovie
          show={show}
          handleClose={handleClose}
          clickedMovie={clickedMovie}
          updateMovie={updateMovie}
        />
      )}
    </>
  );
}

export default Movie;
