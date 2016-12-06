/* @flow */
import React, { Component } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MainContent from '../components/MainContent';

export class App extends Component {
  render () {
    const { tab } = this.props;

    return (
      <MainContent tab={tab} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.application.tab,
  }
}

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({}, dispatch)
)(App);
