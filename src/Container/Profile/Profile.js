import React, { Component } from "react";
import Classes from "./Profile.module.scss";
import { connect } from "react-redux";
import { Redirect, Route, Switch, NavLink } from "react-router-dom";
import {
  Image,
  Button,
  Menu,
  Grid,
  Container,
  GridColumn,
} from "semantic-ui-react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfileEdit from "./ProfileEdit/ProfileEdit";
class Profile extends Component {
  state = { activeItem: "account" };
  handleClick = (e, { name }) => {
    this.setState({
      activeItem: name,
    });
  };
  toOrders = () => {
    this.props.history.push("/Orders");
  };

  render() {
    const { activeItem } = this.state;
    const { auth, profile } = this.props;
    let profileImage = (
      <div className={Classes.ImageContainer}>
        <Button
          circular
          size="large"
          className={Classes.ProfileBtn}
          color="purple"
        >
          {profile.initials}
        </Button>
      </div>
    );
    if (profile.image !== "") {
      profileImage = (
        <div className={Classes.ImageContainer}>
          <Image
            src={profile.image}
            className={Classes.ProfileBtn}
            circular
          ></Image>
        </div>
      );
    }
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div className={Classes.ProfileContainer}>
        <br />
        <br />
        {profileImage}
        <h1 className={Classes.UserName}>
          {[profile.firstName, profile.lastName].join(" ")}
        </h1>
        {}

        <Container style={{ marginTop: "30px" }}>
          {profile.isAdmin ? (
            <React.Fragment>
              <NavLink to="/Add-Product">
                {" "}
                <Button color="green" size="large">
                  Add Product
                </Button>
              </NavLink>
              <NavLink to="/Manage-Products">
                {" "}
                <Button color="blue" size="large">
                  Manage Products
                </Button>
              </NavLink>
            </React.Fragment>
          ) : null}
          <br />
          <br />
          <br />
          <br />
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column computer={6}>
                <Menu secondary vertical>
                  <Menu.Item
                    name="account"
                    active={activeItem === "account"}
                    onClick={this.handleClick}
                    as={NavLink}
                    to="/Profile"
                  >
                    <h2>Account</h2>
                  </Menu.Item>
                  <Menu.Item
                    name="settings"
                    active={activeItem === "settings"}
                    onClick={this.handleClick}
                    as={NavLink}
                    to={"/Profile/Edit"}
                  >
                    <h2>Edit Account</h2>
                  </Menu.Item>

                  <Menu.Item
                    name="orders"
                    active={this.state.activeItem === "order"}
                    onClick={this.toOrders}
                  >
                    <h2>Your Orders</h2>
                  </Menu.Item>
                </Menu>
              </Grid.Column>
              <GridColumn computer={9}>
                <Switch>
                  <Route path="/Profile" exact component={ProfileDetails} />
                  <Route path="/Profile/Edit" exact component={ProfileEdit} />
                </Switch>
              </GridColumn>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Profile);
