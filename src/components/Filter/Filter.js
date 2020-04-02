import React, { useContext, useEffect, useRef, useState, useLayoutEffect } from "react";

import { SearchContext } from "../../pages/Search/searchContext";

const Filter = ({ boats }) => {
  useLayoutEffect(() => {
    filterBoats(boats);
  }, []);
  const [filteredBoats, filterBoats] = useContext(SearchContext);
  const [yearFilter, setYearFilter] = useState(2010);
  const [lengthFilter, setLengthFilter] = useState(15);

  useEffect(() => {
    let result = boats.filter(
      boat => 
      (!lengthFilter || boat.length > lengthFilter) &&
      (!yearFilter || boat.year > yearFilter)
    );
    console.log("result => ",result)
    filterBoats(result);
  }, [yearFilter, lengthFilter]);

  const clearFilter = () => {
    filterBoats(boats);
    filterForm.current.reset();
    setLengthFilter(15);
    setYearFilter(2010);
  }

  const filterForm = useRef(null);
  return (
    <div className="container">
      <div className="row no-gutter">Filters</div>
      <div className="col-sm-12">
        <form onReset={clearFilter} ref={filterForm}>
          <div className="form-group">
            <label htmlFor="lengthFilter">Boat length greater than</label>
            <input type="range" className="form-control-range" name="length" min="0" max="100" id="lengthFilter" value={lengthFilter} onChange={(e) => setLengthFilter(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="yearFilter">Boat year newer than</label>
            <input type="range" className="form-control-range" min="1950" max="2020" name="year" id="yearFilter" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} />
          </div>
          <button type="reset">Clear filters</button>
        </form>
      </div>
    </div>
  )
}

export default Filter;