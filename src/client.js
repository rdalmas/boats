import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

const localGraphQL = "https://sls-sandbox.zizoo.com/graphql";

const cache = new InMemoryCache({
  freezeResults: true
});

const client = new ApolloClient({
  cache,
  uri: localGraphQL
});

export default client;