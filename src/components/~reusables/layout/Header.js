// modules
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styles
import logo from "../assets/logo.png";
import { small_space, extra_small_space, medium_space_1 } from "../variables/spacing";
import { body_hero } from "../variables/font-sizes";
import { white, text, black } from "../variables/colors";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link className="logo" to="/">
          <div className="logo-text">Slate</div>
          <div className="logo-icon">
            <img src={logo} alt="Stackly Logo" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: ${white};
  height: 10vh;
  min-height: 60px;

  nav {
    height: inherit;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    padding: 0 ${medium_space_1};
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${text};
    font-weight: 500;
  }

  a.logo {
    display: flex;
    font-size: ${body_hero};
    font-weight: bold;

    .logo-text {
      margin-right: ${extra_small_space};
    }

    .logo-icon {
      width: 30px;
      img {
        width: inherit;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li a:hover {
    color: ${black};
  }
`;
