import React, { useContext } from "react";

import SearchContext from "../../pages/Search/search.context";
import Card from "../Card/Card";

const SearchResults = ({ loading }) => {
  const [filteredBoats] = useContext(SearchContext);
  return (
    <div className="row">
      <div className="col-md-12">
        { filteredBoats && filteredBoats.length > 1 && filteredBoats.map(boat => (
          <Card key={boat.id} item={boat} />
        ))}
        { !loading && filteredBoats && filteredBoats.length === 0 && (
          <div className="row">
            <div className="col-md-12 align-items-center">
              <h4>Sorry!</h4>
              <h5>We can't seem to find any boat that match your filters</h5>
              <span>Change the filters and try again</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults;