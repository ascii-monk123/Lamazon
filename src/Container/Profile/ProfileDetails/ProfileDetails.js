import React from "react";
import { List } from "semantic-ui-react";
import { connect } from "react-redux";

const ProfileDetails = (props) => {
  const { profile } = props;
  return (
    <React.Fragment>
      <h1>Your Profile Details :-</h1>
      <br />
      <List selection verticalAlign="middle" divided>
        <List.Item>
          <p>
            <b>First Name : </b>
            {profile.firstName}
          </p>
        </List.Item>
        <List.Item>
          <p>
            <b>Last Name : </b>
            {profile.lastName}
          </p>
        </List.Item>
        <List.Item>
          <p>
            <b>E-mail: </b>
            {profile.email}
          </p>
        </List.Item>
        <List.Item>
          <p>
            <b>Image url : </b>
            {profile.image ? profile.image : "none"}
          </p>
        </List.Item>
      </List>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(ProfileDetails);
