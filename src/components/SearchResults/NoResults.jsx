import React from "react";

const NoResults = () => (
  <div className="row mt-2">
    <div className="col-md-12 align-items-center">
      <h4 className="blue-text">Sorry!</h4>
      <h5 className="blue-text">We can't seem to find any boat that match your filters</h5>
      <span className="blue-text">Change the filters and try again</span>
    </div>
  </div>
);

export default NoResults;