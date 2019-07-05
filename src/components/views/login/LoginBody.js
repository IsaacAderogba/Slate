// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authActions";

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

const LoginBody = props => {
  const { signIn, authError } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <StyledBody>
      <section className="hero-container">
        <div className="hero">
          <div className="hero-text">
            <h2>Log in to your account</h2>
            <form onSubmit={onFormSubmit}>
              <Input
                placeholder="Your email"
                value={email}
                onChange={onEmailChange}
              />
              <Input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={onPasswordChange}
              />
              <ButtonSecondary>Log In</ButtonSecondary>
            </form>
            {authError ? <p className="error">{authError}</p> : null}
          </div>
        </div>
      </section>
    </StyledBody>
  );
};

const StyledBody = styled.main`
  background: ${white};
  min-height: 400px;

  .error {
    color: #bb0000;
    text-align: center;
  }

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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginBody);
