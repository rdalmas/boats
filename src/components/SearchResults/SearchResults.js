import React, { useContext } from "react";

import "./SearchResults.css"
import { SearchContext } from "../../pages/Search/searchContext";

const SearchResults = () => {
  const [filteredBoats] = useContext(SearchContext);
  let boats = filteredBoats || [];
  return (
    <div className="row">
      { boats && boats.length > 1 && boats.map(d => {
        return (
          <div key={d.id} className="card mb-3 card-size">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={d.imageUrl} className="card-img-top" alt={d.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="row no-gutters">
                    <h5 className="card-title space">{d.name}</h5>
                    <div className="card-text">{d.year}</div>
                  </div>
                  <h6 className="card-text">{`${d.locality}, ${d.country}`}</h6>
                  <p className="card-text"></p>
                  <p className="card-text">{`Length: ${d.length}`}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    }
    </div>
  )
}

export default SearchResults;