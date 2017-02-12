/* @flow */
import React, { Component } from "react";
import {
  View,
  StyleSheet,
	AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { reviewAdded } from '../actions/reviews';
import Repository from '../models/repository';
import MainContent from '../components/MainContent';

export class App extends Component {
	componentDidMount() {
    const repo = new Repository();
    repo.getAllReviews().then((reviews) => {
      reviews.forEach((review) => {
        this.props.reviewAdded(review);
      });
    });
	}

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
  (dispatch) => bindActionCreators({reviewAdded}, dispatch)
)(App);
