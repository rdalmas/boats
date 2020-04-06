import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Wrapper;