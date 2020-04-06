import React from 'react';
import { Link } from "react-router-dom";

import Wrapper from "../../styled-components/Wrapper";
import Panel from '../../styled-components/Panel';
import lostImg from "../../img/lost.jpg";

export const NotFound = () => (
  <Wrapper background={lostImg}>
    <Panel>
      <div className="col-md-12 col-sm-8">
        <h1 className="row no-gutters white-text justify-content-center">Ops...</h1>
        <h5 className="white-text row no-gutters text justify-content-center">It seems that you're lost in the sea.</h5>
        <h5 className="white-text row no-gutters text justify-content-center">Let us help guide you out and get you back home.</h5>
        <div className="row no-gutters justify-content-center">
          <Link className="btn btn-secondary btn-lg" to={{pathname: "/"}} role="button">Home</Link>
        </div>
      </div>
    </Panel>
  </Wrapper>
);

export default NotFound;
