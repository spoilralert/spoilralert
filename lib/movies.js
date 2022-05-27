import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetStrapiGraphqlUrl, CreateAuthorizedSystemClient } from "./strapi";
import { GetMovieDetails } from "./movieDB";

export async function LoadMovie(id) {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
        query GetMovie {
          movie(id: ${id}) {
            data {
              attributes {
                title
                release_date
                genre1
                genre2
                genre3
                synopsis
                poster_url
                backdrop_url
                spoilr_request {
                  data {
                    id
                  }
                }
              }
            }
          }
        }
  
        `,
  });

  return data;
}

export async function AddMovieStrapi(movieDetails) {
  console.log("MovieDetails from AddMovieStrapi");
  console.log(movieDetails);
  const client = CreateAuthorizedSystemClient();
  try {
    const { data } = await client.mutate({
      mutation: gql`
          mutation CreateMovie {
            createMovie(
              data: {
                title: "${movieDetails.title}"
                genre1: "${movieDetails.genre1}"
                genre2: "${movieDetails.genre2}"
                genre3: "${movieDetails.genre3}"
                release_date: "${movieDetails.release_date}"
                synopsis: "${movieDetails.plot.split('"').join("")}"
                poster_url: "${movieDetails.poster_image}"
                backdrop_url: "${movieDetails.backdrop_image}"
              }
            ) {
              data {
                id
                attributes {
                  title
                }
              }
            }
          }
        `,
    });
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function FetchMovieFromMovieDbAndPopulateStrapi(movieDbId) {
  const movieDetails = await GetMovieDetails(movieDbId);

  const { data, error: strapiError } = await AddMovieStrapi(movieDetails);
  if (strapiError) {
    return { strapiError };
  }

  return { data };
}

export async function SearchMovies(title) {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
            query SearchMovies {
              movies(filters: { title: { containsi: "${title}" } }) {
                data {
                  id
                  attributes {
                    title
                    release_date
                    poster_url
                    synopsis
                  }
                }
              }
              }
          `,
  });
  return data;
}

export async function SearchMoviesAdvanced(genre, tag) {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
        query SearchMoviesAdvanced {
          movies(
            filters: {
              or: [
                { genre1: { eq: "${genre}" } }
                { genre2: { eq: "${genre}" } }
                { genre3: { eq: "${genre}" } }
              ]
              spoilrs: { tags: { tag: { eq: "${tag}" } } }
            }
          ) {
            data {
              id
              attributes {
                title
                release_date
                poster_url
                synopsis
              }
            }
          }
        }
      `,
  });
  return data;
}

export async function GetGenres() {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
        genres {
          data {
            id
            attributes {
              name
            }
          }
        }
      `,
  });
  return data;
}
