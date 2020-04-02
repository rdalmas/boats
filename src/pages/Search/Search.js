import React, { useContext, useEffect } from "react";
import { withApollo } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";

import Filter from "../../components/Filter/Filter";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchContextProvider from "./searchContext";
import queries from "../../graphql/queries";

const Search = ({ client }) => {
  const { loading, error, data } = useQuery(queries.GET_BOATS, {
    variables: { input: { active: true } },
  });
  let boats = [];
  if (data) {
    boats = client.readQuery({ query: queries.GET_BOATS_CACHE });
  }
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <SearchContextProvider>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Filter boats={boats.getBoats} />
          </div>
          <div className="col-sm-9">
            <SearchResults />
          </div>
        </div> 
      </div>
    </SearchContextProvider>
  );
}

export default withApollo(Search);