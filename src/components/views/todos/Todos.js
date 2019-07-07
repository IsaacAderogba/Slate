// modules
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

// components
import IsAuthUser from "../../hoc/IsAuthUser";
import { grey_gradient } from "../../~reusables/variables/colors";
import ComponentLoader from "../../~reusables/molecules/ComponentLoader";
import DesktopNav from "../../~reusables/layout/DesktopNav";
import FooterNav from "../../~reusables/layout/FooterNav";
import { setTodoReady } from "../../../store/actions/todosActions";

// styles
import { small_space } from "../../~reusables/variables/spacing";
import TodosBody from "./TodosBody";

const Todos = props => {
  const { user, history, setTodoReady } = props;

  useEffect(() => {
    if (user && user.length > 0) {
      setTodoReady(user);
      if (user[0].todosReady) {
        history.push("/todos/generate");
      }
    }
  }, [history, setTodoReady, user]);

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
`;

const mapStateToProps = state => {
  return {
    user: state.firestore.ordered.user,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTodoReady: user => dispatch(setTodoReady(user))
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
  }),
  IsAuthUser
)(Todos);
