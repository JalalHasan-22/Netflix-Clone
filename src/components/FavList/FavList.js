import React from "react";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./FavList.css";
import Swal from "sweetalert2";
import EditFav from "../editFav/EditFav";

function FavList() {
  const [favMovies, setFavMovies] = useState();
  const [clickedMovie, setClickedMovie] = useState();
  const [show, setShow] = useState(false);

  async function getMoviesFromDB() {
    const url = `https://movies-appj.herokuapp.com/getMovie`;
    const response = await fetch(url);
    const data = await response.json();
    setFavMovies(data);
  }

  async function handleDelete(id) {
    const url = `https://movies-appj.herokuapp.com/delete/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.status === 203) {
      getMoviesFromDB();
      Swal.fire("Done!", "Movie was deleted", "success");
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleShowModal(movie) {
    handleShow();
    setClickedMovie(movie);
  }

  useEffect(() => {
    getMoviesFromDB();
  }, []);

  return (
    <div className="component">
      <h1>Favorite Movies</h1>
      <div className="container">
        {favMovies &&
          favMovies.map((movie) => {
            return (
              <Card key={movie.id} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.posterpath}`}
                />
                <Card.Body>
                  <Card.Title>
                    {movie.title ? movie.title : "Some Title"}
                  </Card.Title>
                  <Card.Text>
                    Users Comments:
                    {movie.comment ? movie.comment : " No Comments Added"}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(movie)}
                  >
                    update
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleDelete(movie.id);
                    }}
                  >
                    Delete{" "}
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        {clickedMovie && (
          <EditFav
            show={show}
            handleClose={handleClose}
            clickedMovie={clickedMovie}
          />
        )}
      </div>
    </div>
  );
}

export default FavList;
