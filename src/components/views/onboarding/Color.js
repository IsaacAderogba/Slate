// modules
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { onboardingStarted } from "../../../store/actions/authActions";
import { updateProfile } from "../../../store/actions/userActions";

// components

// styles
import { ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { white, text } from "../../~reusables/variables/colors";
import {
  blue_gradient,
  orange_gradient,
  red_gradient,
  green_gradient,
  purple_gradient
} from "../../~reusables/variables/colors";
import {
  medium_space_1,
  small_space
} from "../../~reusables/variables/spacing";

const Color = ({ setNextModal, setCurrentModal, user, updateProfile }) => {
  const onSetTheme = themeSelected => {
    updateProfile({
      name: user[0].name,
      theme: themeSelected,
      id: user[0].id,
      emoji: user[0].emoji
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setCurrentModal(false);
    setNextModal(true);
  };

  return (
    <StyledColor>
      <h2>
        Choose your theme{" "}
        <span role="img" aria-label="okay">
          🎨
        </span>
      </h2>
      <p>Don't worry, this can be changed at any time.</p>
      <div className="colors">
        <div
          className={`circle blue ${user[0].theme === blue_gradient}`}
          onClick={() => onSetTheme(blue_gradient)}
        />
        <div
          className={`circle orange ${user[0].theme === orange_gradient}`}
          onClick={() => onSetTheme(orange_gradient)}
        />
        <div
          className={`circle red ${user[0].theme === red_gradient}`}
          onClick={() => onSetTheme(red_gradient)}
        />
        <div
          className={`circle green ${user[0].theme === green_gradient}`}
          onClick={() => onSetTheme(green_gradient)}
        />
        <div
          className={`circle purple ${user[0].theme === purple_gradient}`}
          onClick={() => onSetTheme(purple_gradient)}
        />
      </div>
      <form onSubmit={onFormSubmit}>
        <ButtonSecondary>Choose Theme</ButtonSecondary>
      </form>
    </StyledColor>
  );
};

const StyledColor = styled.div`
  padding: ${small_space};
  .colors {
    max-width: 350px;
    margin-bottom: ${medium_space_1};
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .colors .circle {
    height: 64px;
    width: 64px;
    margin: ${small_space} ${medium_space_1};
    border-radius: 50%;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.11);
    border: 1px solid ${text};
    cursor: pointer;

    &.true {
      border: 1px solid ${white};
    }
  }

  .blue {
    background: ${blue_gradient};
  }

  .orange {
    background: ${orange_gradient};
  }

  .red {
    background: ${red_gradient};
  }

  .green {
    background: ${green_gradient};
  }

  .purple {
    background: ${purple_gradient};
  }

  h2,
  p {
    color: ${white};
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    onboardingStarted: () => dispatch(onboardingStarted()),
    updateProfile: profile => dispatch(updateProfile(profile))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Color);
