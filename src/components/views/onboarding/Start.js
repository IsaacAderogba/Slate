// modules
import React, { useState } from "react";
import styled from "styled-components";
import { ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { Input } from "../../~reusables/atoms/Inputs";
import { white } from "../../~reusables/variables/colors";

const Start = ({ setNextModal, onboardingStarted }) => {
  const [name, setName] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();

    // create updateProfile method

    setNextModal(true);
    //   onboardingStarted();
  };

  return (
    <StyledStart>
      <h2>Hey there 👋, let's get you set up </h2>
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

export default Start;
