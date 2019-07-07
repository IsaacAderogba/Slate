// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

// components
import { signUp } from "../../../store/actions/authActions";

// styles
import { white, orange_gradient } from "../../~reusables/variables/colors";
import {
  medium_space_1,
  extra_small_space
} from "../../~reusables/variables/spacing";
import heroImage from "../../~reusables/assets/hero-image.png";
import {
  heading_1,
  button_text,
  heading_2,
  body_1
} from "../../~reusables/variables/font-sizes";
import { Input } from "../../~reusables/atoms/Inputs";
import { ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { tablet_max_width } from "../../~reusables/variables/media-queries";
import ComponentLoader from "../../~reusables/molecules/ComponentLoader";

const SignupBody = props => {
  const {
    signUp,
    signupError,
    signupLoader,
    signupSuccess,
    history,
    auth
  } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (signupSuccess) {
      history.push("/onboarding");
    }
    if (!signupSuccess && !signupLoader && auth && auth.uid) {
      history.push("/todos");
    }
  }, [auth, history, signupLoader, signupSuccess]);

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    signUp({ email, password });
  };

  return (
    <StyledBody>
      <section className="hero-container">
        <div className="hero">
          <div className="hero-text">
            <h1>Your Personal Todo List</h1>
            <p>
              Personalised todos to boost your mental health. Start each day
              with a clean slate.
            </p>
            <form onSubmit={onFormSubmit}>
              <Input
                placeholder="Your email"
                value={email}
                onChange={onEmailChange}
              />
              <Input
                placeholder="Your password"
                value={password}
                onChange={onPasswordChange}
                type="password"
              />
              <ButtonSecondary>Sign Up</ButtonSecondary>
            </form>
            {signupLoader ? <ComponentLoader height="50px" /> : null}
            {signupError ? <p className="error">{signupError}</p> : null}
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

  .error {
    color: #bb0000;
    text-align: center;
    font-size: ${body_1};
  }

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
    font-size: 20px;
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

const mapStateToProps = state => {
  return {
    user: state.firestore.ordered.user,
    auth: state.firebase.auth,
    signupError: state.auth.signupError,
    signupSuccess: state.auth.signupSuccess,
    signupLoader: state.auth.signupLoader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        where: ["email", "==", `${props.auth.email}`],
        storeAs: "user"
      }
    ];
  })
)(SignupBody);
