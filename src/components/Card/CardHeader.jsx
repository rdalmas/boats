import React, { useState } from "react";

import TitleSubtitle from "../../styled-components/TitleSubtitle";
import LikeButton from "../../styled-components/LikeButton";
import ViewsText from "../../styled-components/ViewsText";

const CardHeader = ({ item: { name, locality, year, country }}) => {
  const [like, setLike] = useState(false);
  return (
    <div className="card-header">
      <div className="row no-gutters align-items-center">
        <div className="col-md-8">
          <div className="row no-gutters align-items-center">
            <div className="col-md-10">
              <div className="row no-gutters justify-content-center justify-content-md-start">
                <TitleSubtitle beforeText={name} afterText={year} />
              </div>
              <div className="row no-gutters justify-content-center justify-content-md-start">
                <div className="card-text">{`${locality}, ${country}`}</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row no-gutters justify-content-center">
                <LikeButton id="like-btn" value={like} onClick={setLike} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row no-gutters justify-content-center justify-content-md-start">
            <ViewsText beforeText="Hot" afterText="69 views" />
          </div>
          <div className="row no-gutters justify-content-center justify-content-md-start">
            <h6 className="red-text card-subtitle">in the last 24 hours</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;