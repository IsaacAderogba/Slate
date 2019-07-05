import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const HasLoggedIn = WrappedComponent => {

  const HOCComponent = props => {
    const { auth } = props;
    if (auth.uid) {
      return <Redirect to="/profile" />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    };
  };

  return connect(mapStateToProps)(HOCComponent);
};

export default HasLoggedIn;