import React, { useContext, useEffect, useRef, useState, useMemo } from "react";

import SearchContext from "../../pages/Search/search.context";
import InputRange from "../../styled-components/InputRange";
import FilterLabel from "../../styled-components/FilterLabel";
import useDebounce from "../../hooks/useDebounce";
import useQueryString from "../../hooks/useQueryString";
import { searchDefaults as def } from "../../constants";

const Filter = ({ boats }) => {
  const [yearQs, setYearQs] = useQueryString("year");
  const [lengthQs, setLengthQs] = useQueryString("length");
  const [,filterBoats] = useContext(SearchContext);
  const [yearFilter, setYearFilter] = useState(yearQs);
  const [lengthFilter, setLengthFilter] = useState(lengthQs);
  const dbLengthFilter = useDebounce(lengthFilter, 300);
  const dbYearFilter = useDebounce(yearFilter, 300);

  const boatsArray = useMemo(() =>
    boats.map(boat => ({
      ...boat,
      price: new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' }).format(boat.price)
    })),
    [boats]
  );

  useEffect(() => {
    let result = boatsArray.filter(
      boat => 
      (!dbLengthFilter || boat.length > dbLengthFilter) &&
      (!dbYearFilter || boat.year > dbYearFilter)
      );
    filterBoats(result);
    setLengthQs(dbLengthFilter);
    setYearQs(dbYearFilter);
  }, [dbLengthFilter, dbYearFilter, boatsArray, filterBoats, setLengthQs, setYearQs]);

  const clearFilter = () => {
    filterBoats(boatsArray);
    filterForm.current.reset();
    setLengthFilter(def.minLength);
    setYearFilter(def.minYear);
  }

  const filterForm = useRef(null);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row justify-content-center"><h5>Filters</h5></div>
          <div className="col-md-12">
            <form onReset={clearFilter} ref={filterForm}>
              <div className="form-group">
                <FilterLabel htmlFor="lengthFilter">Boat length greater than</FilterLabel>
                <InputRange id="lengthFilter" min={def.minLength} max={def.maxLength} value={lengthFilter} onChange={setLengthFilter} />
              </div>
              <div className="form-group">
                <FilterLabel htmlFor="yearFilter">Boat year newer than</FilterLabel>
                <InputRange id="yearFilter" min={def.minYear} max={def.maxYear} value={yearFilter} onChange={setYearFilter} />
              </div>
              <div className="row no-gutters justify-content-center">
                <button className="btn btn-secondary btn-md" type="reset">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;