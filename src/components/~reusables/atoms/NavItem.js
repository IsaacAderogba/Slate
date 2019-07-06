// modules
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// components

// styles
import { text } from "../variables/colors";
import { extra_small_space } from "../variables/spacing";

const DesktopNavItem = ({ link, text, icon }) => {
  return (
    <StyledItem>
      <NavLink exact to={link} activeClassName="active">
        <i className="material-icons">{icon}</i>
        <span>{text}</span>
      </NavLink>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  height: 98%;
  a {
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: rgba(74, 85, 104, 0.5);

    i {
      margin-right: ${extra_small_space};
    }

    &.active {
      color: ${text};
      font-weight: bold;
      border-bottom: 2px solid ${text};
    }

    @media only screen and (max-width: 500px) {
      &.active {
        border-bottom: none;
      }
    }
  }
`;

export default DesktopNavItem;
