import styled from "styled-components";

const TitleSubtitle = styled.span`
  &:before {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    white-space: ${props => props.pre ? "pre" : "initial"};
    content: ${props => `' ${props.beforeText}'`};
  }
  &:after {
    content: ${props => `' ${props.afterText} '`};
    white-space: pre;
  }
`;

export default TitleSubtitle;