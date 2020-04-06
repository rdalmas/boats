import React from 'react';
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="main">
          <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-6">
            <h1>Your next boat trip starts here</h1>
            <p className="lead">Find your next destination</p>
            <p className="lead">
              <Link className="btn btn-secondary btn-lg" to={{pathname: "/search", search: "?length=0&year=1950"}} role="button">Search</Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
