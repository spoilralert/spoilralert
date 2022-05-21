import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { getStrapiGraphqlUrl } from "./api";

export async function Register(email, username, password) {
  const client = new ApolloClient({
    uri: getStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Register {
        register(
          input: {
            username: ${username}
            email: ${email}
            password: ${password}
          }
        ) {
          jwt
          user {
            id
            username
            email
            confirmed
            role {
              name
              type
            }
          }
        }
      }
    `,
  });
  return data;
}

export async function Login(email, password) {
  const client = new ApolloClient({
    uri: getStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Login {
        login(
          input: {
            email: ${email}
            password: ${password}
          }
        ) {
          jwt
          user {
            id
            username
            email
            confirmed
            role {
              name
              type
            }
          }
        }
      }
    `,
  });
  return data;
}
