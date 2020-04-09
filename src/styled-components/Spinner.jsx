import React from "react";
import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </SpinnerWrapper>
);

export default Spinner;
