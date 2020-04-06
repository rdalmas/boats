import React, { useContext } from "react";

import SearchContext from "../../pages/Search/search.context";
import Card from "../Card/Card";
import NoResults from "./NoResults";

const SearchResults = () => {
  const [filteredBoats] = useContext(SearchContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          { filteredBoats && filteredBoats.length > 1 && filteredBoats.map(boat => (
            <Card key={boat.id} item={boat} />
          ))}
          { filteredBoats && filteredBoats.length === 0 && (
            <NoResults />
          )}
        </div>
      </div>
    </div>
    
  )
}

export default SearchResults;