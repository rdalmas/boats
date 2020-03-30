import React from "react";
import { Query } from "react-apollo";

import Filter from "../../components/Filter";
import SearchResults from "../../components/SearchResults/SearchResults";
import queries from "../../graphql/queries";

const input = {
  active: true
}

const Search = () => {
  return (
    <div className="container">
      <Query query={queries.GET_BOATS} variables={{ input }}>
      {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <div className="row">
          <div className="col-sm-3">
            <Filter />
          </div>
          <div className="col-sm-9">
            <SearchResults results={data} />
          </div>
        </div>
        
      );
    }}
      </Query>
    </div>
  );
}

export default Search;