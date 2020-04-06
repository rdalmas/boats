import React from "react";

import PointerRight from "../../styled-components/PointerRight";
import BoldUpperText from "../../styled-components/BoldUpperText";
import Icon from "../../styled-components/Icon";
import TitleSubtitle from "../../styled-components/TitleSubtitle";
import FieldName from "../../styled-components/FieldName";
import StarsReview from "../../styled-components/StarsReview";
import TextIconList from "../../styled-components/TextIconList";

const CardBody = ({ item: { length, guests, cabins, reviews, price }}) => (
  <div className="card-body no-padding mb-3 mt-3">
    <div className="row no-gutters">
      <div className="col-md-7">
        <div className="row no-gutters">
          <div className="col-md-4 align-items-center">
            <div className="row no-gutters justify-content-center">
              <h5>{`${length.toFixed(2)}m`}</h5>
            </div>
            <div className="row no-gutters justify-content-center">
              <FieldName subtitle>length</FieldName>
            </div>
          </div>
          <div className="col-md-4 align-items-center">
            <div className="row no-gutters justify-content-center">
              <h5>{`${cabins}`}</h5>
            </div>
            <div className="row no-gutters justify-content-center">
              <FieldName subtitle>cabins</FieldName>
            </div>
          </div>
          <div className="col-md-4 align-items-center">
            <div className="row no-gutters justify-content-center">
              <h5>{`${guests}`}</h5>
            </div>
            <div className="row no-gutters justify-content-center">
              <FieldName subtitle>guests</FieldName>
            </div>
          </div>
        </div>
        <TextIconList items={["Autopilot", "Heating"]} icon="check" />
        <div className="col-md-12 align-items-center">
          <div className="row no-gutters">
            <div className="col-md-5 align-items-center">
              <div className="row no-gutters justify-content-md-start justify-content-center">
                <FieldName>sail type</FieldName>
              </div>
            </div>
            <div className="col-md-7 align-items-center">
              <div className="row no-gutters justify-content-md-start justify-content-center">
                <span>Rolling Mainsail</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 align-items-center">
          <div className="row no-gutters">
            <div className="col-md-5 align-items-center">
              <div className="row no-gutters justify-content-md-start justify-content-center">
                <FieldName>free extras</FieldName>
              </div>
            </div>
            <div className="col-md-7 align-items-center">
              <div className="row no-gutters justify-content-md-start justify-content-center">
                <span>AirCon, Wifi, Very Long Extra Description</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="row no-gutters justify-content-center">
          <StarsReview score={reviews.score} color="#fd0" />
        </div>
        <div className="row no-gutters justify-content-center">
          <FieldName subtitle>{`${reviews.total} REVIEWS`}</FieldName>
        </div>
        <div className="row no-gutters justify-content-center">
          <FieldName>from</FieldName>
          <TitleSubtitle pre beforeText={price} afterText={"weekly"} />
          <div>
            <Icon icon="question-circle-fill" fill="#d3d3d3" />
          </div>
        </div>
        <div className="row no-gutters justify-content-center">
          <div>
            <Icon icon="lightning-fill" />
          </div>
          <BoldUpperText text="direct booking" />
        </div>
        <div className="row no-gutters justify-content-center">
          <PointerRight>View Details</PointerRight>
        </div>
      </div>
    </div>
  </div>
);

export default CardBody;