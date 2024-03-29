// modules
import React from "react";
import styled from "styled-components";

// styles
import DesktopNavItem from "../atoms/NavItem";

const FooterNav = () => {
  return (
    <StyledFN>
      <DesktopNavItem link="/todos" text="Todos" icon="playlist_add_check" />
      <DesktopNavItem link="/profile" text="Profile" icon="person_outline" />
    </StyledFN>
  );
};

const StyledFN = styled.footer`
  display: none;
  @media only screen and (max-width: 500px) {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.11);

    bottom: 0;
    position: fixed;
  }
`;

export default FooterNav;
