import { useState, useEffect } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";

export default function MovieDetails({
  selectedId,
  onAddWatched,
  moviesWatched,
  children,
}) {
  const [movie, setMovie] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  function handleAdd() {
    const watchedMovie = {
      imdbID: selectedId,
      imdbRating: Number(imdbRating),
      title,
      year,
      poster,
      userRating,
      runtime: Number(runtime.split(" ").at(0)),
    };

    onAddWatched(watchedMovie);
    children();
  }

  function handleWatchedAlready(movie) {
    return movie.imdbID === selectedId;
  }

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const watchedAlready = moviesWatched?.filter(handleWatchedAlready);

  useEffect(() => {
    function callback(e) {
      if (e.code === "Escape") {
        children();
      }
    }

    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [children]);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return function () {
      //Cleanup function
      document.title = "MovieMap";
    };
  }, [title]);

  return (
    <div className="details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={children}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span> {imdbRating} IMDb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {watchedAlready.length === 0 && (
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                />
              )}
              {watchedAlready.length === 0 && userRating > 0 && (
                <button className="btn-add" onClick={handleAdd}>
                  Add to List
                </button>
              )}
              {watchedAlready.length > 0 && (
                <p>
                  You have rated the movie {watchedAlready[0].userRating} ⭐️
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
