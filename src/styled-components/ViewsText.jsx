import styled from "styled-components";

const ViewsText = styled.span`
  margin-bottom: 0.75rem;
  &:before {
    padding: 0.25rem;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #de6449;
    border-radius: 2px;
    content: ${props => `'${props.beforeText}'`};
  }
  &:after {
    color: #de6449;
    font-weight: bold;
    content: ${props => `' ${props.afterText}'`};
    white-space: pre;
  }
`;

export default ViewsText;