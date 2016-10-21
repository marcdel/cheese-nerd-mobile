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
  Button,
} from 'native-base';

import { login } from '../actions/user';

export class Login extends Component {
  constructor() {
    super();
    this.loginPressed = this.loginPressed.bind(this);
    this.getFbUserImage = this.getFbUserImage.bind(this);
    this.getFbUserNameEmail = this.getFbUserNameEmail.bind(this);
  }

  getFbUserImage (userId, token) {
    var api = `https://graph.facebook.com/v2.3/${userId}/picture?redirect=false&access_token=${token}`;

    fetch(api)
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Photo Url: ", responseData.data.url);
      console.log("Photo height: ", responseData.data.height);
      console.log("Photo width: ", responseData.data.width);
    }).done();
  }

  getFbUserNameEmail (userId, token) {
    var api = `https://graph.facebook.com/v2.3/${userId}?fields=name,email&access_token=${token}`;

    fetch(api)
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Date: ", responseData);
      console.log("User name: ", responseData.name);
      console.log("User email: ", responseData.email);
    }).done();
  }

  loginPressed () {
    let _this = this;
    FBLoginManager.loginWithPermissions(["email","public_profile","user_friends"], function(error, data){
      if (!error) {
        console.log("Login data: ", data);
        _this.getFbUserImage(data.credentials.userId, data.credentials.token);
        _this.getFbUserNameEmail(data.credentials.userId, data.credentials.token);
      } else {
        console.log("Error: ", error);
      }
    });

    const userId = Math.random();
    this.props.login(userId);
  }

  render () {
    return (
      <Container>
        <Header>
          <Title>Log In</Title>
        </Header>

        <Content style={{paddingTop: 250}}>
          <FBLogin style={{ marginBottom: 10, }}
            permissions={["email","public_profile","user_friends"]}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            onLogin={function(data){
              console.log("Logged in!");
              console.log(data);
            }}
            onLogout={function(){
              console.log("Logged out.");
            }}
            onLoginFound={function(data){
              console.log("Existing login found.");
              console.log(data);
            }}
            onLoginNotFound={function(){
              console.log("No user logged in.");
            }}
            onError={function(data){
              console.log("ERROR");
              console.log(data);
            }}
            onCancel={function(){
              console.log("User cancelled.");
            }}
            onPermissionsMissing={function(data){
              console.log("Check permissions!");
              console.log(data);
            }}
            />
          <Button onPress={() => this.loginPressed()} block>Log In</Button>
        </Content>
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
  (dispatch) => bindActionCreators({ login }, dispatch)
)(Login);
