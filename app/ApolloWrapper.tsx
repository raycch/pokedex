"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import ApolloLinkTimeout from "apollo-link-timeout";

function makeClient(baseURL: string) {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: baseURL,
    fetchOptions: { next: { revalidate: 60 * 60 * 1000 } },
  });
  const timeoutLink = new ApolloLinkTimeout(2 * 1000);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: timeoutLink.concat(httpLink),
  });
}

export function ApolloWrapper({
  baseURL = "https://beta.pokeapi.co/graphql/v1beta",
  children,
}: React.PropsWithChildren<{ baseURL?: string }>) {
  return (
    <ApolloNextAppProvider makeClient={() => makeClient(baseURL)}>
      {children}
    </ApolloNextAppProvider>
  );
}
