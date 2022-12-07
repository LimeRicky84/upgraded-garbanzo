import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  //useQuery,
  //gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './views/layout';
console.log('3')

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: '/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  console.log('2')
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout><Home /></Layout>}
          />
          <Route
            path='/Profile'
            element={<Layout><Profile /></Layout>}
          />
          <Route
            path='/Login'
            element={<Layout><Login /></Layout>}
          />
          <Route
            path='/Signup'
            element={<Layout><Signup /></Layout>}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
