import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Filter from "../../components/Filter/Filter";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchProvider from "./search.provider";
import queries from "../../graphql/queries";

const Search = () => {
  const { loading, error, data } = useQuery(queries.GET_BOATS, {
    variables: { input: { active: true } },
  });
  if (loading) return "";
  if (error) return `Error! ${error}`;
  return (
    <SearchProvider>
      <div className="container">
        <div className="col-md-12">
          <div className="row">
              <div className="col-md-3">
                <Filter boats={data.getBoats} />
              </div>
              <div className="col-md-9">
                <SearchResults loading={loading} />
              </div>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}

export default Search;