import styled from "styled-components";

const PointerRight = styled.div`
  width: 200px;
  height: 40px;
  position: relative;
  background: #de6449;
  text-transform: uppercase;
  text-align: center;
  line-height: 40px;
  color: white;
  font-weight: bold;
  &:before {
    content: "";
    position: absolute;
    right: -10px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 10px solid #de6449;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 10px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    content: "";
  }
`;

export default PointerRight;