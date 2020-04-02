import React from 'react';

import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container">
          <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-6">
            <h1 className="display-5">Your next boat trip starts here</h1>
            <p className="lead">Find your next destination.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="/search" role="button">Search</a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
