import styled from "styled-components";

const BoldUpperText = styled.div`
  &:after {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    content: ${props => `' ${props.text}'`};
    white-space: pre;
  }
`;

export default BoldUpperText;