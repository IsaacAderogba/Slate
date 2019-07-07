// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

// components/methods
import { onboardingStarted } from "../../../store/actions/authActions";
import { updateProfile } from "../../../store/actions/userActions";
import { generateTodos } from "../../../store/actions/todosActions";

// styles
import { ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { white, text } from "../../~reusables/variables/colors";
import {
  medium_space_1,
  small_space
} from "../../~reusables/variables/spacing";
import ComponentLoader from "../../~reusables/molecules/ComponentLoader";

const Emotion = ({
  setCurrentModal,
  user,
  updateProfile,
  history,
  generateTodos
}) => {
  const [emoji, setEmoji] = useState(user[0].emoji);
  const [loader, setLoader] = useState(false);

  const onFormSubmit = e => {
    e.preventDefault();
    updateProfile({
      name: user[0].name,
      theme: user[0].theme,
      id: user[0].id,
      emoji: emoji
    });
    setLoader(true);
    generateTodos(user, emoji);
    setTimeout(() => {
      setLoader(false);
      setCurrentModal(false);
      history.push("/todos");
    }, 1000)
  };

  return (
    <StyledEmotion>
      <h2>
        {user[0].name}, how are you feeling?{" "}
        <span role="img" aria-label="okay">
          👌
        </span>
      </h2>
      <p>
        We’ll assign you new todos based on how you’re feeling.
      </p>
      <div className="emojis">
        <div>
          <span
            role="img"
            aria-label="happy face"
            className="icon"
            onClick={() => setEmoji("happy")}
          >
            🙂
          </span>
          <span className={`emoji ${emoji === "happy"}`}>Happy</span>
        </div>
        <div>
          <span
            role="img"
            aria-label="grinning face"
            className="icon"
            onClick={() => setEmoji("grinning_face")}
          >
            😁
          </span>
          <span className={`emoji ${emoji === "grinning_face"}`}>Great</span>
        </div>
        <div>
          <span
            role="img"
            aria-label="sticky tongue face"
            className="icon"
            onClick={() => setEmoji("sticky_out_tongue")}
          >
            😜
          </span>
          <span className={`emoji ${emoji === "sticky_out_tongue"}`}>
            Awesome
          </span>
        </div>
        <div>
          <span
            role="img"
            aria-label="indifferent"
            className="icon"
            onClick={() => setEmoji("Indifferent")}
          >
            😕
          </span>
          <span className={`emoji ${emoji === "Indifferent"}`}>Mehh</span>
        </div>
        <div>
          <span
            role="img"
            aria-label="sad face"
            className="icon"
            onClick={() => setEmoji("Sad")}
          >
            😔
          </span>
          <span className={`emoji ${emoji === "Sad"}`}>Sad</span>
        </div>
        <div>
          <span
            role="img"
            aria-label="angry face"
            className="icon"
            onClick={() => setEmoji("Angry")}
          >
            😠
          </span>
          <span className={`emoji ${emoji === "Angry"}`}>Angry</span>
        </div>
      </div>
      <form onSubmit={onFormSubmit}>
        <ButtonSecondary>Get Todos</ButtonSecondary>
      </form>
        {loader ? <ComponentLoader height="40px" /> : null}
    </StyledEmotion>
  );
};

const StyledEmotion = styled.div`
padding: ${small_space};
  .emojis {
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: ${medium_space_1};
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .emojis {
    div {
      width: 64px;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: ${small_space} ${medium_space_1};
      .icon {
        cursor: pointer;
        font-size: 36px;
      }
      .emoji {
        font-size: 16px;
        font-weight: 500;
        color: ${white};
      }
      .true {
        color: ${text};
      }
    }
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
    margin-bottom: ${medium_space_1};
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    onboardingStarted: () => dispatch(onboardingStarted()),
    generateTodos: (user, emoji) => dispatch(generateTodos(user, emoji)),
    updateProfile: profile => dispatch(updateProfile(profile))
  };
};

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(Emotion);
