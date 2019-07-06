// modules
import React from "react";
import styled from "styled-components";

// styles
import { tablet_max_width } from "../variables/media-queries";
import { body_hero } from "../variables/font-sizes";
import logo from "../assets/logo.png";
import { extra_small_space } from "../variables/spacing";
import { text } from "../variables/colors";
import DesktopNavItem from "../atoms/NavItem";

const DesktopNav = () => {
  return (
    <StyledDN>
      <DesktopNavItem link="/todos" text="Todos" icon="playlist_add_check" />
      <div className="logo" to="/">
        <div className="logo-text">Slate</div>
        <div className="logo-icon">
          <img src={logo} alt="Slate Logo" />
        </div>
      </div>
      <DesktopNavItem link="/profile" text="Profile" icon="person_outline" />
    </StyledDN>
  );
};

const StyledDN = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.11);

  .logo {
    display: flex;
    font-size: ${body_hero};
    font-weight: bold;

    .logo-text {
      margin-right: ${extra_small_space};
      color: ${text};
    }

    .logo-icon {
      width: 30px;
      img {
        width: inherit;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export default DesktopNav;
