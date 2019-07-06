// modules
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

// components
import ComponentLoader from "../../~reusables/molecules/ComponentLoader";
import Start from "./Start";
import Color from "./Color";
import Emotion from "./Emotion";

// styles
import { grey_gradient } from "../../~reusables/variables/colors";

const Onboarding = props => {
  const [start, setStart] = useState(true);
  const [color, setColor] = useState(false);
  const [emotion, setEmotion] = useState(false);
  const { user } = props;

  let themeColor = null;
  if (user && user.length > 0) {
    themeColor = user[0].theme;
    return (
      <StyledOnboarding themeColor={themeColor}>
        {start && (
          <Start
            setNextModal={setColor}
            setCurrentModal={setStart}
            user={user}
          />
        )}
        {color && (
          <Color
            user={user}
            setNextModal={setEmotion}
            setCurrentModal={setColor}
          />
        )}
        {emotion && <Emotion user={user} setCurrentModal={setEmotion} />}
      </StyledOnboarding>
    );
  } else {
    return <ComponentLoader height="100vh" />;
  }
};

const StyledOnboarding = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.themeColor ? props.themeColor : grey_gradient)};
`;

const mapStateToProps = state => {
  return {
    user: state.firestore.ordered.user,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        where: ["email", "==", `${props.auth.email}`],
        storeAs: "user"
      }
    ];
  })
)(Onboarding);
