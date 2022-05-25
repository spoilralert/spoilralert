import Image from "next/image";
import Link from "next/link";

const searchPosterUrl = "https://image.tmdb.org/t/p/w92";

export default function SearchResults({
  movies,
  searchMovieDb,
  movieDbMovies,
  searchValue,
  searchStarted,
  addMovieToStrapi,
}) {
  console.log(movies);
  return (
    <div className="search__results">
      {movies.length === 0 &&
        searchValue !== "" &&
        searchStarted &&
        movieDbMovies.length === 0 && (
          <div className="search__cta">
            <h4>No movies found, search in MovieDb?</h4>
            <div>
              <button onClick={searchMovieDb}>Yes</button>
            </div>
          </div>
        )}
      {movies.map((movie, index) => (
        <Link key={index} href={`/movieDetails/${movie.id}`} passHref>
          <a>
            <div className="search__item">
              <Image
                src={searchPosterUrl + movie.attributes.poster_url}
                width="70"
                height="100"
                alt="placeholder"
              />
              <div className="search__description">
                <h5 key={index}>{movie.attributes.title}</h5>
                <h5>{movie.attributes.release_date}</h5>
              </div>
            </div>
          </a>
        </Link>
      ))}
      {movieDbMovies.map((movie) => (
        <div
          key={movie.id}
          onClick={addMovieToStrapi}
          data-key={movie.id}
          className="search__item"
        >
          <Image
            src={searchPosterUrl + movie.poster_path}
            width="70"
            height="100"
            alt="placeholder"
            data-key={movie.id}
          />
          <div data-key={movie.id} className="search__description">
            <h5 data-key={movie.id}>{movie.original_title}</h5>
            <h5 data-key={movie.id}>{movie.release_date}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
