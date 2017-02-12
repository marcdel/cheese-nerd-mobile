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
import MainContent from '../components/MainContent';

export class App extends Component {
	componentDidMount() {
		AsyncStorage.getItem('@cheesenerd:reviews').then((reviews) => {
			if(!reviews) return;

			JSON.parse(reviews).forEach((review) => {
				this.props.reviewAdded(review);
			});
		}).done();
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
