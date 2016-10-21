/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FBLoginManager} from 'react-native-facebook-login';

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
  }

  loginPressed () {
    FBLoginManager.loginWithPermissions(["email","public_profile","user_friends"], function(error, data){
      if (!error) {
        console.log("Login data: ", data);
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
