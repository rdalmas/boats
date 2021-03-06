import React from 'react';
import { Link } from "react-router-dom";

import Wrapper from '../../styled-components/Wrapper';
import Panel from '../../styled-components/Panel';
import boatImg from "../../img/boat.jpg";

export const Home = () => (
  <Wrapper background={boatImg}>
    <Panel>
      <div className="row no-gutters justify-content-center text-center">
        <div className="col-md-12 col-lg-8">
          <h1 className="white-text">Your next boat trip starts here</h1>
          <h5 className="white-text">Find your next destination</h5>
          <Link className="btn btn-secondary btn-lg" to="/search" role="button">Search</Link>
        </div>
      </div>
    </Panel>
  </Wrapper>
);

export default Home;
