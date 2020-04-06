import React from "react";
import styled from "styled-components";

import Icon from "./Icon";

const Stars = ({ className, score, color }) => {
  const stars = [];
  for(let i = 1; i <= 5; i++) {
    if (i <= score) {
      stars.push(<Icon icon="star-fill" key={i} fill={color} />)
    } else {
      stars.push(<Icon icon="star" key={i} />);
    }
  }
  return (
    <div className={className}>
      {stars}
    </div>
  )
}

const StarsReview = styled(Stars)`
  font-size: 1.25rem;
  margin-bottom: 0.375rem;
`;

export default StarsReview;