/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import App from './App';
import Login from './Login';

export class Root extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      this.props.loggedIn ? <App /> : <Login />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  }
}

Root.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(Root);
