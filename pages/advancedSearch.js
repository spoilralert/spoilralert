import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import AdvancedSearchForm from "../components/forms/AdvancedSearchForm";
import AdvancedSearchResults from "../components/AdvancedSearchResults";
import { GetTags } from "../lib/spoilrs";
import { GetGenres } from "../lib/movies";
import { useState } from "react";
import { GetGenreById, SearchMoviesAdvanced } from "../lib/movies";

export default function AdvancedSearch({ tags, genres }) {
  const [genreChecked, setGenreChecked] = useState("");
  const [tagChecked, setTagChecked] = useState("");
  const [movies, setMovies] = useState([]);
  const [showSearch, setShowSearch] = useState(true);

  async function onSubmit(e) {
    e.preventDefault();
    const genreResult = await GetGenreById(genreChecked);
    const genreName = genreResult.genre.data.attributes.name;
    const result = await SearchMoviesAdvanced(genreName, tagChecked);
    setMovies(result.movies.data);
    setShowSearch(false);
  }

  const handleCheckTags = (e) => {
    if (e.target.checked) {
      setTagChecked(e.target.value);
    } else {
      setTagChecked("");
    }
  };

  const handleCheckGenres = (e) => {
    if (e.target.checked) {
      setGenreChecked(e.target.value);
    } else {
      setGenreChecked("");
    }
  };

  return (
    <Layout>
      <Head title="Advanced search" />
      <Header />
      <main>
        <section>
          <div>
            <Heading title="Advanced search" />
            {showSearch && (
              <AdvancedSearchForm
                tags={tags}
                genres={genres}
                onSubmit={onSubmit}
                handleCheckTags={handleCheckTags}
                handleCheckGenres={handleCheckGenres}
                genreChecked={genreChecked}
                tagChecked={tagChecked}
              />
            )}
            {!showSearch && (
              <button
                onClick={() => setShowSearch(true)}
                className="advanced-search-btn"
              >
                Show Search form
              </button>
            )}
            <AdvancedSearchResults movies={movies} />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const tagsResult = await GetTags();
  const tags = tagsResult.tags.data;
  const genresResult = await GetGenres();
  const genres = genresResult.genres.data;
  return {
    props: { tags, genres },
  };
}
