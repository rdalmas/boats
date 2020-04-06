import styled from "styled-components";

const FieldName = styled.span`
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.5;
  color: #6c757d;
  text-transform: uppercase;
  margin-top: ${props => props.subtitle ? "-0.5rem" : 0}
`;

export default FieldName;