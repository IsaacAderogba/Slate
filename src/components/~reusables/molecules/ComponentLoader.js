import React from "react";
import styled from "styled-components";
import { alt_background } from "../variables/colors";

const ComponentLoader = ({ themeColor, height }) => (
  <StyledLoader themeColor={themeColor} height={height}>
    <div className="lds-dual-ring" />
  </StyledLoader>
);

const StyledLoader = styled.div`
  height: ${props => (props.height ? props.height : "200px")};
  width: 100%;
  background-color: transparent;
  display: flex;

  justify-content: center;
  align-items: center;

  .lds-dual-ring {
    display: inline-block;
    margin: 0 auto;

    width: 64px;
    height: 64px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${alt_background};
    border-color: ${alt_background} transparent ${alt_background} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ComponentLoader;
