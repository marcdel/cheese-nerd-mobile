/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Button,
} from 'native-base';

import { login, logout, photoAdded, detailsAdded } from '../actions/user';

export class Login extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    FBLoginManager.getCredentials((error, data) => {
      if (!error) {
        this.handleLogin(data);
      } else {
        this.props.logout();
      }
    });
  }

  getFbUserImage = (userId, token) => {
    var api = `https://graph.facebook.com/v2.3/${userId}/picture?width=400&redirect=false&access_token=${token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        this.props.photoAdded(responseData.data);
      }).done();
  }

  getFbUserNameEmail = (userId, token) => {
    var api = `https://graph.facebook.com/v2.3/${userId}?fields=name,email&access_token=${token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        this.props.detailsAdded(responseData.name, responseData.email);
      }).done();
  }

  handleLogin = (data) => {
    this.props.login(data.credentials);
    this.getFbUserImage(data.credentials.userId, data.credentials.token);
    this.getFbUserNameEmail(data.credentials.userId, data.credentials.token);
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Log In</Title>
        </Header>

        <Content>
        </Content>

        <Footer>
          <FBLogin style={{ marginBottom: 10, }}
            permissions={["email","public_profile","user_friends"]}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            onLogin={(data) => {
              this.handleLogin(data);
            }} />
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

Login.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({ login, logout, photoAdded, detailsAdded }, dispatch)
)(Login);
