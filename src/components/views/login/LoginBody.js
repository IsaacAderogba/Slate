// modules
import React from "react";
import styled from "styled-components";

// styles
import { white, orange_gradient } from "../../~reusables/variables/colors";
import {
  medium_space_1,
  extra_small_space,
  medium_space_2
} from "../../~reusables/variables/spacing";
import { button_text, heading_2 } from "../../~reusables/variables/font-sizes";
import { Input } from "../../~reusables/atoms/Inputs";
import { ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { tablet_max_width } from "../../~reusables/variables/media-queries";

const LoginBody = () => {
  return (
    <StyledBody>
      <section className="hero-container">
        <div className="hero">
          <div className="hero-text">
            <h2>Lorem ipsum dolor sit</h2>
            <form>
              <Input placeholder="Your email" />
              <Input placeholder="Your password" />
              <ButtonSecondary>Log In</ButtonSecondary>
            </form>
          </div>
        </div>
      </section>
    </StyledBody>
  );
};

const StyledBody = styled.main`
  background: ${white};
  min-height: 400px;

  h2 {
    color: ${white};
    text-align: center;
    margin-bottom: ${medium_space_2};
    font-size: ${heading_2};
  }

  p {
    font-size: ${button_text};
    font-weight: 500;
  }

  section.hero-container {
    background: white;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 ${medium_space_1};

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .hero {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${orange_gradient};
      min-height: 80vh;
      border-radius: 8px;
    }

    .hero-text {
      width: 90%;
      margin: 0 5%;
    }

    @media only screen and (max-width: ${tablet_max_width}) {
      padding: 0 ${extra_small_space};

      form {
        align-items: center;
        input {
          width: 80%;
        }
      }
    }
  }
`;

export default LoginBody;
