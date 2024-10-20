import Movie from "./Movie";
export default function MovieList({ movies, children }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID}>
          {children}
        </Movie>
      ))}
    </ul>
  );
}
