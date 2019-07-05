// modules
import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Profile = (props) => {
    console.log(props.users)
  return <div>Profile</div>;
};

const mapStateToProps = state => {
  return {
      users: state.firestore.ordered.users
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [{ collection: "users" }];
  })
)(Profile);
