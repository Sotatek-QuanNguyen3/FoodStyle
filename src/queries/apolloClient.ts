import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {config} from '../config';
import {store} from '../store';

const httpLink = createHttpLink({uri: config.graphUrl});

const authLink = setContext((_, {headers}) => {
  const token = store.getState().food.accessToken;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
