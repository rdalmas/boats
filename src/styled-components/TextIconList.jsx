import React from "react";
import styled from "styled-components";

import Icon from "./Icon";

const TextIcon = ({icon, item, className}) => (
  <div className={`${className} row no-gutters`}>
    <div>
      <Icon icon={icon} />
    </div>
    <span>{item}</span>
  </div>
);

const TextIconWithSpace = styled(TextIcon)`
  margin-right: 5px;
`;

const TextIconList = ({ items, icon, className }) => {
  const textCheckList = items.map((item, index) => {
    if(index === (items.length - 1)) {
      return (<TextIcon className={className} key={index} icon={icon} item={item} />)
    }
    return (<TextIconWithSpace key={index} icon={icon} item={item} />)
  });
  return (
    <div className="col-md-12 align-items-center">
      <div className="row no-gutters justify-content-sm-center justify-content-center justify-content-md-start">
        {textCheckList}
      </div>
    </div>
  );
}

export default TextIconList;