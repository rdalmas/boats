import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import inRange from "lodash.inrange";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import NotFound from "./pages/NotFound/NotFound";
import { searchDefaults as def } from "./constants"

const SearchWithParams = ({ length, year, history }) => {
  if (year && length && 
    inRange(length, def.minLength, (def.maxLength+1)) && 
    inRange(year, def.minYear, (def.maxYear+1))) {
      return <Search />
  } else if (!length && !year) {
  }
  history.push({ pathname: "search", search: `?length=${def.minLength}&year=${def.minYear}`})
  return null;
}

const SearchWithQuery = ({location}) => {
  let query = new URLSearchParams(location.search);
  let history = useHistory();
  return(
    <SearchWithParams history={history} length={query.get("length")} year={query.get("year")} />
  )
}

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search" render={props => (
        <SearchWithQuery {...props} />
      )}>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;