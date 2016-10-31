/* @flow */
import React, { Component } from "react";
import {
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MainContent from '../components/MainContent';

export class App extends Component {

  render () {
    const tab = this.props.tab;

    return (
      <MainContent
        tab={tab}
        cheeses={this.props.cheeses}
        reviews={this.props.reviews} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.application.tab,
    cheeses: state.cheeses,
    reviews: state.reviews
  }
}

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({}, dispatch)
)(App);
