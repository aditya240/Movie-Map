import WatchedMovies from "./WatchedMovies";
export default function WatchedMovieList({ watched, handleDelete }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovies
          movie={movie}
          onClick={handleDelete}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}
