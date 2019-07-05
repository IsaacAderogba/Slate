// modules
import React from "react";
import HasLoggedIn from "../../hoc/HasLoggedIn";
import { connect } from "react-redux";
import { compose } from "redux";

// components
import Header from "../../~reusables/layout/Header";
import Footer from "../../~reusables/layout/Footer";
import LoginBody from "./LoginBody";

const Login = () => {
  return (
    <div>
      <Header />
      <LoginBody />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  HasLoggedIn
)(Login);
