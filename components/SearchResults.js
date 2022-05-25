import Image from "next/image";
import Link from "next/link";

export default function SearchResults({
  movies,
  searchMovieDb,
  movieDbMovies,
  searchValue,
  searchStarted,
  addMovieToStrapi,
}) {
  return (
    <div className="search__results">
      {movies.length === 0 &&
        searchValue !== "" &&
        searchStarted &&
        movieDbMovies.length === 0 && (
          <div>
            No movies found, search in MovieDb?
            <button onClick={searchMovieDb}>Yes</button>
          </div>
        )}
      {movies.map((movie, index) => (
        <Link key={index} href={`/movieDetails/${movie.id}`} passHref>
          <h4 key={index}>{movie.attributes.title}</h4>
        </Link>
      ))}
      {movieDbMovies.map((movie) => (
        <h4 key={movie.id} onClick={addMovieToStrapi} data-key={movie.id}>
          {movie.original_title}
        </h4>
      ))}
    </div>
  );
}
