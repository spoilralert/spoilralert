import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetStrapiGraphqlUrl, CreateAuthorizedClient } from "./strapi";
// import { GetMovieDetails } from "./moviedb";

export async function UpdateSpoilrVotes(spoilrId, numVotes) {
  const client = CreateAuthorizedClient();

  const { data } = await client.mutate({
    mutation: gql`
      mutation UpdateSpoilrVotes {
        updateSpoilr(id: ${spoilrId}, data: { votes: ${numVotes} }) {
          data {
            id
            attributes {
              votes
            }
          }
        }
      }
    `,
  });
  return data;
}

export async function AddSpoilr(movieId, title, content, tags, user) {
  const client = CreateAuthorizedClient();

  const { data } = await client.mutate({
    mutation: gql`
      mutation AddSpoilr {
        createSpoilr(
          data: {
            title: "${title}"
            content: "${content}"
            movie: "${movieId}"
            user: "${user}"
            tags: [${tags}]
          }
        ) {
          data {
            id
            attributes {
              title
              user {
                data {
                  attributes {
                    username
                  }
                }
              }
              createdAt
            }
          }
        }
      }
    `,
  });
  return data;
}

export async function AddSpoilrRequest(movieId, userId) {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.mutate({
    mutation: gql`
      mutation AddSpoilrRequest {
        createSpoilrRequest(data: { movie: ${movieId}, users_permissions_user: ${userId} }) {
          data {
            id
            attributes {
              movie {
                data {
                  attributes {
                    title
                  }
                }
              }
              createdAt
            }
          }
        }
      }
    `,
  });
  return data;
}

export async function UpdateSpoilr(id, title, content, tags) {
  const client = CreateAuthorizedClient();

  const { data } = await client.mutate({
    mutation: gql`
      mutation UpdateSpoilr {
        updateSpoilr(
          id: ${id}
          data: { title: "${title}", content: "${content}", tags: ${tags}}
        ) {
          data {
            id
            attributes {
              title
              content
              tags {
                data {
                  attributes {
                    name
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
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });
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
                              name
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

export async function GetTags() {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetTags {
        tags {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    `,
  });
  return data;
}

export async function GetSpoilrsForUser(userId) {
  const client = CreateAuthorizedClient();

  const { data } = await client.query({
    query: gql`
      query GetSpoilrsForUser {
        movies(filters: {
          spoilrs: { user: { id: { eq: ${userId} } } }
        })
        {
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
                          name
                        }
                      }
                    }
                    user {
                      data {
                        attributes {
                          username
                        }
                        id
                      }
                    }
                  }
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

export async function GetSpoilrRequestsForUser(userId) {
  const client = CreateAuthorizedClient();

  const { data } = await client.query({
    query: gql`
      query GetSpoilrRequestsForUser {
        spoilrRequests(filters: { users_permissions_user: { id: { eq: ${userId} } } }) {
          data {
            id
            attributes {
              movie {
                data {
                  attributes {
                    title
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

export async function GetSpoilrRequests() {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetSpoilrRequests {
        spoilrRequests {
          data {
            id
            attributes {
              movie {
                data {
                  attributes {
                    title
                    release_date
                    poster_url
                  }
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
