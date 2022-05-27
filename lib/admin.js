import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetStrapiGraphqlUrl } from "./strapi";

export async function PostContactForm(subject, message, name, email) {
  const client = new ApolloClient({
    uri: GetStrapiGraphqlUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.mutate({
    mutation: gql`
      mutation PostContactForm {
        createContactForm(
          data: {
            Subject: "${subject}"
            Message: "${message}"
            Email: "${email}"
            Name: "${name}"
          }
        ) {
          data {
            id
          }
        }
      }
    `,
  });
  return data;
}
