import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Like = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  & svg {
    outline: none;
    transition: transform 0.15s linear;
  }
  &:hover svg {
    transform: scale(1.1);
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;

const LikeButton = ({ onClick, value, id }) => (
  <Like id={id} value={value} onClick={() => onClick(!value)}>
    {!value && (<Icon icon="heart" />)}
    {value && (<Icon icon="heart-fill" fill="#de6449" />)}
  </Like>
);

export default LikeButton;