// modules
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

// components
import IsAuthUser from "../../hoc/IsAuthUser";
import { grey_gradient } from "../../~reusables/variables/colors";
import ComponentLoader from "../../~reusables/molecules/ComponentLoader";
import DesktopNav from "../../~reusables/layout/DesktopNav";
import FooterNav from "../../~reusables/layout/FooterNav";

const Todos = props => {
  const { user } = props;

  let themeColor = null;
  if (user && user.length > 0) {
    themeColor = user[0].theme;
    return (
      <StyledTodos themeColor={themeColor}>
        <DesktopNav />
        <FooterNav />
      </StyledTodos>
    );
  } else {
    return <ComponentLoader height="100vh" />;
  }
};

const StyledTodos = styled.div`
  height: 100vh;
  background: ${props => (props.themeColor ? props.themeColor : grey_gradient)};

  @media only screen and (max-width: 500px) {
    margin-bottom: 60px;
  }
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
)(Todos);
