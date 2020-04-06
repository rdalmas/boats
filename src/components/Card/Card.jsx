import React from "react";

import "./Card.css";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardRibbon from "./CardRibbon";

const Card = ({ item }) => (
  <div className="card mb-12">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={item.imageUrl} className="card-img-top" alt={item.name} />
        <CardRibbon>Zizoo Recomended</CardRibbon>
      </div>
      <div className="col-md-8">
        <CardHeader 
          name={item.name} 
          locality={item.name} 
          year={item.year} 
          country={item.country}
        />
        <CardBody
          length={item.length}
          guests={item.guests}
          cabins={item.cabins}
          reviews={item.reviews}
          price={item.price}
        />
      </div>
    </div>
  </div>
);

export default Card;