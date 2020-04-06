import React from 'react';
import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  return (
    <div className="col-md-12 not-found">
      <div className="not-found-panel">
        <div className="col-md-12 col-sm-8">
          <div className="row no-gutters title justify-content-center">Ops</div>
          <p className="row no-gutters text justify-content-center">It seems that you're lost in the sea.</p>
          <p className="row no-gutters text justify-content-center">Let us help guide you out and get you back home.</p>
          <div className="row no-gutters justify-content-center">
            <Link className="btn btn-secondary btn-lg" to={{pathname: "/"}} role="button">Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
