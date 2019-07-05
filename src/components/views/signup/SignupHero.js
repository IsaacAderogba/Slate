// modules
import React from "react";
import styled from "styled-components";

// styles
import { white, orange_gradient } from "../../~reusables/variables/colors";
import {
  medium_space_1,
  small_space,
  extra_small_space
} from "../../~reusables/variables/spacing";
import heroImage from "../../~reusables/assets/hero-image.png";
import {
  heading_1,
  body_hero,
  button_text,
  heading_2
} from "../../~reusables/variables/font-sizes";
import { Input } from "../../~reusables/atoms/Inputs";
import { ButtonPrimary, ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { tablet_max_width } from "../../~reusables/variables/media-queries";

const SignupHero = () => {
  return (
    <StyledBody>
      <section className="hero-container">
        <div className="hero">
          <div className="hero-text">
            <h1>Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </p>
            <form>
              <Input placeholder="Your email" />
              <Input placeholder="Your password" />
              <ButtonSecondary>Sign Up</ButtonSecondary>
            </form>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="screenshot of app" />
          </div>
        </div>
      </section>
    </StyledBody>
  );
};

const StyledBody = styled.main`
  background: ${white};
  min-height: 400px;

  h1,
  p {
    color: ${white};
  }

  h1 {
    margin-top: ${extra_small_space};
    font-size: ${heading_1};
    margin-bottom: ${extra_small_space};
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
      align-items: flex-end;
    }

    .hero {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${orange_gradient};
      min-height: 80vh;
      min-height: 350px;
      border-radius: 8px;
    }

    .hero-text {
      width: 50%;
      margin: 0 5%;
    }

    .hero-image {
      width: 30%;
      margin: 0 5%;
      height: 80vh;
      display: flex;
      justify-content: center;

      img {
        height: 90vh;
      }
    }

    @media only screen and (max-width: ${tablet_max_width}) {
      padding: 0 ${extra_small_space};

      .hero-text,
      .hero-image {
        width: 90%;
        margin-top: ${medium_space_1};

        img {
        height: 80vh;
      }
      }

      h1 {
        font-size: ${heading_2};
      }

      form {
        align-items: center;
        input {
          width: 80%;
        }
      }

      .hero {
        flex-direction: column;
      }
    }
  }
`;

export default SignupHero;
