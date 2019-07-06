// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

// components
import { updateProfile } from "../../../store/actions/userActions";
import { ButtonPrimary, ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { Input } from "../../~reusables/atoms/Inputs";

// styles
import { white, text } from "../../~reusables/variables/colors";
import {
  small_space,
  medium_space_1
} from "../../~reusables/variables/spacing";
import {
  blue_gradient,
  orange_gradient,
  red_gradient,
  green_gradient,
  purple_gradient
} from "../../~reusables/variables/colors";

const ProfileBody = ({ user, updateProfile, signOut }) => {
  const [name, setName] = useState(user[0].name);
  const onSetTheme = themeSelected => {
    updateProfile({
      name: name,
      theme: themeSelected,
      id: user[0].id,
      emoji: user[0].emoji
    });
  };

  const onSaveOptions = e => {
    e.preventDefault();
    updateProfile({
      name: name,
      theme: user[0].theme,
      id: user[0].id,
      emoji: user[0].emoji
    });
  };

  return (
    <StyledBody>
      <h1>Profile</h1>
      <form onSubmit={onSaveOptions}>
        <Input
          required
          hover="true"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
        />
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
        <ButtonPrimary color={user[0].theme}>Save Options</ButtonPrimary>
      </form>
      <ButtonSecondary onClick={() => signOut()}>Log out</ButtonSecondary>
    </StyledBody>
  );
};

const StyledBody = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .colors {
    border-radius: 6px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.11);
    background-color: white;
    max-width: 400px;
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
    border: 1px solid ${white};
    cursor: pointer;

    &.true {
      border: 1px solid ${text};
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

  form {
    width: 100%;
    margin-bottom: ${medium_space_1};
  }

  h1 {
    color: ${white};
    margin: ${small_space} 0;
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: profile => dispatch(updateProfile(profile)),
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProfileBody);
