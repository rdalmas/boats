import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import { Router } from "@reach/router";

import './index.css';
import * as serviceWorker from './serviceWorker';
import client from "./client";
import Home from './pages/Home/Home';
import Search from "./pages/Search/Search";

let SearchRoute = () => <Search />
let HomeRoute = () => <Home />


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <HomeRoute path="/" />
        <SearchRoute path="search" />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
