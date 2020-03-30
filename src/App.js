import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from "react-apollo";

import './App.css';

const input = {
  active: true
}

const GET_BOATS = gql`
  query getBoats($input: GetBoatInput) {
    getBoats(input: $input) {
      id
      name
      type
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Query query={GET_BOATS} variables={{ input }}>
      {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <div>{data.getBoats.map(d => {
          return (
            <React.Fragment>
              <span>{d.id}</span>
              <span>{d.name}</span>
              <span>{d.type}</span>
            </React.Fragment>
          );
        })}</div>
      );
    }}
      </Query>
    </div>
  );
}

export default App;
