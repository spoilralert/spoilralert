import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getStrapiGraphqlUrl } from "./api";

export async function CreateAuthorizedClient() {
  const httpLink = createHttpLink({
    uri: getStrapiGraphqlUrl(),
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return client;
}

export async function UpdateSpoilrVotes(spoilrId, numVotes) {
  const client = CreateAuthorizedClient();

  const { data } = await client.query({
    query: gql`
      query UpdateSpoilrVotes {
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

  const { data } = await client.query({
    query: gql`
        query AddSpoilr {
          createSpoilr(
            data: {
              title: ${title}
              content: ${content}
              movie: ${movieId}
              user: ${user}
              tags: ${tags}
            }
          ) {
            data {
              id
              attributes {
                title
                user
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
    uri: getStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query AddSpoilrRequest {
        createSpoilrRequest(
          data: { movie: "3", users_permissions_user: null }
        ) {
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
