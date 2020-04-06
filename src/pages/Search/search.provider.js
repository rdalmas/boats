import React, { useState } from "react";

import SearchContext from "./search.context";

const SearchProvider = props => {
  const [filteredBoats, filterBoats] = useState([], () => {});
  return (
    <SearchContext.Provider value={[filteredBoats, filterBoats]}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;

