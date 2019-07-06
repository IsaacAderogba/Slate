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
import { small_space } from "../../~reusables/variables/spacing";
import TodosBody from "./TodosBody";

const Todos = props => {
  const { user } = props;

  let themeColor = null;
  if (user && user.length > 0) {
    themeColor = user[0].theme;
    return (
      <StyledTodos themeColor={themeColor}>
        <DesktopNav />
        <div className="body">
          <TodosBody user={user} />
        </div>
          <FooterNav />
      </StyledTodos>
    );
  } else {
    return <ComponentLoader height="100vh" />;
  }
};

const StyledTodos = styled.div`
  height: 25vh;
  background: ${props => (props.themeColor ? props.themeColor : grey_gradient)};

  .body {
    padding: ${small_space};
  }

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
