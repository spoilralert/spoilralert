import Image from "next/image";
import Link from "next/link";

const searchPosterUrl = "https://image.tmdb.org/t/p/w92";

interface movie {
  id: number;
    attributes: {
      title: string;
      poster_url: string;
      release_date: string;
      synopsis: string;
    }
}

interface movieDbMovie {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
}

interface SearchProps {
  movies: Array<movie>;
  movieDbMovies: Array<movieDbMovie>;
  searchMovieDb: () => Promise<void>;
  searchValue: string;
  searchStarted: boolean;
  addMovieToStrapi: (e: React.MouseEvent) => Promise<void>
}

export default function SearchResults({
  movies,
  searchMovieDb,
  movieDbMovies,
  searchValue,
  searchStarted,
  addMovieToStrapi,
} : SearchProps) {
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
      {movies.map((movie, index: number) => (
        <Link key={index} href={`/movieDetails/${movie.id}`} passHref>
          <a>
            <div className="results__item">
              <Image
                src={searchPosterUrl + movie.attributes.poster_url}
                width="70"
                height="100"
                alt={movie.attributes.title}
              />
              <div className="results__description">
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
          className="results__item"
        >
          <Image
            src={searchPosterUrl + movie.poster_path}
            width="70"
            height="100"
            alt={movie.original_title}
            data-key={movie.id}
          />
          <div data-key={movie.id} className="results__description">
            <h5 data-key={movie.id}>{movie.original_title}</h5>
            <h5 data-key={movie.id}>{movie.release_date}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
