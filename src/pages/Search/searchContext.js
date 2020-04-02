import React, { useState, createContext } from "react";

export const SearchContext = createContext();

const SearchContextProvider = props => {
  const [filteredBoats, filterBoats] = useState([], () => {});
  return (
    <SearchContext.Provider value={[filteredBoats, filterBoats]}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;

