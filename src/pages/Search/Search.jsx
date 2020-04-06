import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import Filter from "../../components/Filter/Filter";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchProvider from "./search.provider";
import queries from "../../graphql/queries";
import Spinner from "../../styled-components/Spinner";

export const Search = () => {
  const [, setError] = useState();
  const { loading, error, data } = useQuery(queries.GET_BOATS, {
    variables: { input: { active: true } },
  });
  if (loading) return <Spinner />;
  if (error) return setError(() => {
    throw error;
  });
  return (
    <SearchProvider>
      <div className="container">
        <div className="col-md-12">
          <div className="row">
              <div className="col-md-3 mt-4">
                <Filter boats={data.getBoats} />
              </div>
              <div className="col-md-9 mt-4">
                <SearchResults />
              </div>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}

export default Search;