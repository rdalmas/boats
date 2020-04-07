import React from "react";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardRibbon from "./CardRibbon";

const Card = ({ item }) => (
  <div className="card mb-12 mt-2">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={item.imageUrl} className="card-img-top" alt={item.name} />
        <CardRibbon>Zizoo Recomended</CardRibbon>
      </div>
      <div className="col-md-8">
        <CardHeader item={item} />
        <CardBody item={item} />
      </div>
    </div>
  </div>
);

export default Card;