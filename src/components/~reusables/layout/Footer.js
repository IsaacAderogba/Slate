// modules
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styles
import { medium_space_1 } from "../variables/spacing";
import { body_2 } from "../variables/font-sizes";
import { white, text } from "../variables/colors";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Link className="logo" to="/">
          <div className="logo-text">© 2019 Slate All Rights Reserved</div>
        </Link>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${white};
  height: 10vh;
  min-height: 60px;

  > div {
    height: inherit;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    padding: 0 ${medium_space_1};
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${text};
    font-size: ${body_2};
    font-weight: bold;
  }
`;

export default Footer;
