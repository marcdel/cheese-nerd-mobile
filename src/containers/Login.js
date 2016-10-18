/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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

  render () {
    const userId = Math.random();
    return (
      <Container>
        <Header>
          <Title>Log In</Title>
        </Header>

        <Content style={{paddingTop: 250}}>
          <Button onPress={() => this.props.login(userId)} block>Log In</Button>
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
