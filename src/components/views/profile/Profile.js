// modules
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

// components
import IsAuthUser from "../../hoc/IsAuthUser";
import {
  grey_gradient,
  orange_gradient
} from "../../~reusables/variables/colors";
import ComponentLoader from "../../~reusables/molecules/ComponentLoader";

const Profile = props => {
  const { user } = props;
  console.log(user);

  let themeColor = null;
  if (user && user.length > 0) {
    themeColor = user[0].theme;
    return <StyledProfile themeColor={themeColor}>Profile</StyledProfile>;
  } else {
      return <ComponentLoader height="100vh" />;
  }
};

const StyledProfile = styled.div`
  height: 100vh;
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
  }),
  IsAuthUser
)(Profile);
