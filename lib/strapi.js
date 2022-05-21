import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export function getStrapiGraphqlUrl() {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
    "https://spoilralert-backened.ew.r.appspot.com/graphql"
  }`;
}

export async function LoadMovie(id) {
  const client = new ApolloClient({
    uri: getStrapiGraphqlUrl(),
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
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              cover_image {
                data {
                  attributes {
                    formats
                  }
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

export async function LoadSpoilrsForMovie(movieId) {
  const client = new ApolloClient({
    uri: getStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });
  console.log("fetching spoilrs");
  const { data } = await client.query({
    query: gql`
        query GetSpoilrsForMovie {
          movie(id: ${movieId}) {
            data {
              attributes {
                spoilrs {
                  data {
                    attributes {
                      title
                      createdAt
                      votes
                      content
                      tags {
                        data {
                          attributes {
                            tag
                          }
                        }
                      }
                      user {
                        data {
                          attributes {
                            username
                          }
                        }
                      }
                    }
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
