import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetStrapiGraphqlUrl } from "./strapi";

export async function Register(email, username, password) {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  console.log(
    "email: " + email + " username: " + username + " password: " + password
  );

  const { data } = await client.mutate({
    mutation: gql`
      mutation Register {
        register(
          input: {
            username: "${username}"
            email: "${email}"
            password: "${password}"
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
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.mutate({
    mutation: gql`
        mutation Login {
          login(
            input: {
              identifier: "${email}"
              password: "${password}"
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
