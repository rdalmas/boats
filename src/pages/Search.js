import React from "react";
import { Query } from "react-apollo";
import queries from "../graphql/queries";

const input = {
  active: true
}

const Search = () => {
  return (
    <div>
      <Query query={queries.GET_BOATS} variables={{ input }}>
      {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <div>{data.getBoats.map(d => {
          return (
            <React.Fragment key={d.id}>
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

export default Search;