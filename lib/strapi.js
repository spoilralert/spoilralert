import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export function GetStrapiGraphqlUrl() {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
    "https://spoilralert-backened.ew.r.appspot.com/graphql"
  }`;
}

export function CreateAuthorizedClient(jwt) {
  const httpLink = createHttpLink({
    uri: GetStrapiGraphqlUrl(),
  });

  const authLink = setContext((_, { headers }) => {
    const token = jwt || localStorage.getItem("token");
    console.log("token");
    console.log(token);
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

export function CreateAuthorizedSystemClient() {
  return CreateAuthorizedClient(process.env.NEXT_PUBLIC_STRAPI_SYSTEM_TOKEN);
}
