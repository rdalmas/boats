import React from "react";

import "./TopBar.css";

const TopBar = ({ brandImg }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid justify-content-md-start justify-content-center">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          <img alt="Brand" src={brandImg} />
        </a>
      </div>
    </div>
  </nav>
);

export default TopBar;