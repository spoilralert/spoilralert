import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Paragraph from "../../components/paragraph";
import Image from "next/image";
// import Placeholder from "../../public/images/placeholder.jpg";
import TabsSpoilrs from "../../components/tabs/TabsSpoilrs";
// import { LoadMovie, LoadSpoilrsForMovie } from "../../lib/strapi";
import { LoadMovie } from "../../lib/movies";
import { GetTags, LoadSpoilrsForMovie } from "../../lib/spoilrs";

export default function Details({ data, spoilrsData, movieId, tagsData }) {
  const movie = data.movie.data.attributes;
  const banner = movie.backdrop_url;
  const poster = movie.poster_url;
  const spoilrs = spoilrsData.movie.data.attributes.spoilrs.data;
  const tags = tagsData.tags.data;
  console.log("MOVIE");
  console.log(movie);

  return (
    <Layout>
      <Head title="movie title" />
      <Header />
      <main>
        <div className="image__movie__banner">
          <Image src={banner} width="800" height="400" alt="placeholder" />
        </div>

        <section>
          <div className="container__layout movie">
            <div className="image__movie__poster">
              <Image src={poster} width="200" height="300" alt="placeholder" />
            </div>

            <div className="container__movie__details">
              <Heading title={movie.title} />
              <div className="container__movie__details__info">
                <h5>{movie.release_date}</h5>
                {movie.genre1 !== "undefined" && <h5>{movie.genre1}</h5>}
                {movie.genre2 !== "undefined" && <h5>{movie.genre2}</h5>}
                {movie.genre3 !== "undefined" && <h5>{movie.genre3}</h5>}
              </div>

              <div>
                <h4>Plot</h4>
                <Paragraph text={movie.synopsis} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <TabsSpoilrs
            spoilrs={spoilrs}
            movie={movie}
            movieId={movieId}
            tags={tags}
          />
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { movieId } = context.query;
  const data = await LoadMovie(movieId);
  const spoilrsData = await LoadSpoilrsForMovie(movieId);
  const tagsData = await GetTags();

  return {
    props: { data, spoilrsData, movieId, tagsData },
  };
}
