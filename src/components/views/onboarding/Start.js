// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { onboardingStarted } from "../../../store/actions/authActions";
import { updateProfile } from "../../../store/actions/userActions";

// components

// styles
import { ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { Input } from "../../~reusables/atoms/Inputs";
import { white } from "../../~reusables/variables/colors";

const Start = ({
  setNextModal,
  setCurrentModal,
  onboardingStarted,
  user,
  updateProfile
}) => {
  const [name, setName] = useState("");
  console.log(user);

  const onFormSubmit = e => {
    e.preventDefault();
    updateProfile({
      name: name,
      theme: user[0].theme,
      id: user[0].id,
      emoji: user[0].emoji
    });

    onboardingStarted();
    setCurrentModal(false);
    setNextModal(true);
  };

  return (
    <StyledStart>
      <h2>Hey there <span role="img" aria-label="wave">👋</span>, let's get you set up </h2>
      <p>Please enter your first name to begin onboarding.</p>
      <form onSubmit={onFormSubmit}>
        <Input
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={"Your first name"}
        />
        <ButtonSecondary>Get Started</ButtonSecondary>
      </form>
    </StyledStart>
  );
};

const StyledStart = styled.div`
  h2,
  p {
    color: ${white};
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
)(Start);
